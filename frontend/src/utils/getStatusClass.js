export const getStatusClass = (status) => {
    switch (status) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
        return 'status-pending';
      case '7':
      case '8':
        return 'status-success';
      default:
        return 'status-rejected';
    }
};