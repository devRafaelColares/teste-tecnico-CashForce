<template>
    <div>
      <table>
        <thead>
          <tr>
            <th>Numero da Nota</th>
            <th>Sacado</th>
            <th>Cedente</th>
            <th>Data Emissão</th>
            <th>Valor</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.orderNfId">
            <td>{{ order.orderNfId }}</td>
            <td>{{ order.buyer.name }}</td>
            <td>{{ order.provider.name }}</td>
            <td>{{ new Date(order.emissionDate).toLocaleDateString() }}</td>
            <td>{{ order.value }}</td>
            <td>{{ statusLabels[order.orderStatusBuyer] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const orders = ref([]);
  const statusLabels = [
    'Pendente de confirmação',
    'Pedido confirmado',
    'Não reconhece o pedido',
    'Mercadoria não recebida',
    'Recebida com avaria',
    'Devolvida',
    'Recebida com devolução parcial',
    'Recebida e confirmada',
    'Pagamento Autorizado'
  ];
  
  onMounted(async () => {
    try {
      const response = await axios.get('http://localhost:3000/orders');
      orders.value = response.data;
    } catch (error) {
      console.error('Erro ao buscar ordens:', error);
    }
  });
  </script>
  
 