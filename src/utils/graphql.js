export const extractNodes = dataArray =>
  dataArray ? dataArray.edges.map(edge => edge.node) : [];
