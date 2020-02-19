export const fetchDeposits = () => (
  $.ajax({
    url: '/api/deposits'
  })
);
