/// Aquí la función para regresar los pares de calcetines por color
function merchant(n, ar) {
  let pairSocks = [];
  let pairsOfSocks = 0;
  let matchSocks = ar.map((sock) => {
      let findSock = pairSocks.filter( (filterByPairs) => { return filterByPairs === sock;});

      if(findSock.length === 0) {
        let filterSocks = ar.filter(function(filterBySocks){
          return filterBySocks === sock;
        });
        if(filterSocks.length > 0) {
            pairSocks.push(sock);
            let counter = Math.floor(filterSocks.length/2);
            pairsOfSocks = pairsOfSocks + counter;
        }
      }
    });
  return pairsOfSocks;
}

const sendSocks = (departureSocks, array) => {
  let arr = array.split(',');
  document.getElementById('result').value = merchant(departureSocks, arr);
}
