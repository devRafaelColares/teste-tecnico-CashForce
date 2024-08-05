<template>
  <div class="invoice-table">
    <table>
      <thead>
        <tr>
          <th>NOTA FISCAL</th>
          <th>SACADO</th>
          <th>CEDENTE</th>
          <th>EMISSÃO</th>
          <th>VALOR</th>
          <th>STATUS</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="invoice in invoices" :key="invoice.orderNfId">
          <td class="collor-font">{{ invoice.orderNfId }}</td>
          <td class="collor-font">{{ invoice.buyer.name }}</td>
          <td class="collor-font">{{ invoice.provider.name }}</td>
          <td class="collor-font">{{ formatDate(invoice.emissionDate) }}</td>
          <td class="valor">{{ formatCurrency(invoice.value) }}</td>
          <td :class="getStatusClass(invoice.orderStatusBuyer)">
            {{ statusLabels[invoice.orderStatusBuyer] }}
          </td>
          <td><button>Dados do cedente</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { fetchAPI } from '../utils/fetchAPI';
import { getStatusClass } from '@/utils/getStatusClass';

export default {
  name: "InvoiceTable",
  data() {
    return {
      invoices: [],
      statusLabels: [
        'Pendente de confirmação',
        'Pedido confirmado',
        'Não reconhece o pedido',
        'Mercadoria não recebida',
        'Recebida com avaria',
        'Devolvida',
        'Recebida com devolução parcial',
        'Recebida e confirmada',
        'Pagamento Autorizado'
      ]
    };
  },
  async created() {
    try {
      this.invoices = await fetchAPI('http://localhost:3000/orders');
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
    }
  },
  methods: {
    formatDate(dateString) {
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
    formatCurrency(value) {
      const numberValue = parseFloat(value);

      return numberValue
      .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });    
    },
    getStatusClass(status) {
      return getStatusClass(status);
    }
  },
};
</script>

<style scoped>
.invoice-table {
  width: 100%;
  padding-top: 20px;
  font-size: 12px;
  text-align: left;
}

th, td {
  padding-left: 30px;
}

.invoice-table table {
  width: 100%;
  border-collapse: collapse;
  background-color: #FFFFFF;
  border-collapse: separate;
  border-spacing: 0 10px;
}

.invoice-table thead {
  color: #A1A8B8;
}

.invoice-table tbody tr {
  height: 48px;
}

.invoice-table tbody td:first-child {
  border-radius: 6px 0 0 6px;
  border-bottom: 0;
  border: #DFE2EB solid 1px;
  border-right: none;
}

.status-success, .valor {
  color: #00AD8C;
}

.status-pending {
  color: #c9ac56;
}

.status-rejected {
  color: #b63845;
}

.collor-font {
  color: #4D5566;
}

.invoice-table tbody td {
  border-bottom: 0;
  border: #DFE2EB solid 1px;
  border-right: none;
  border-left: none;
}

.invoice-table tbody td:last-child {
  border-radius: 0 6px 6px 0;
  border-bottom: 0;
  border: #DFE2EB solid 1px;
  border-left: none;
}

button {
  width: 150px;
  height: 30px;
  background-color: #FFFFFF;
  color: #727D94;
  border: 1px solid #CAD3FF;
  border-radius: 30px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 10px;
  font-weight: 700;
}

button:hover {
  background-color: #DFE2EB;
  color: #FFFFFF;
}
</style>
