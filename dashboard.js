// Sample PG Data
const pgData = [
    { name: 'PG 1', location: 'Location 1', occupancy: '80%' },
    { name: 'PG 2', location: 'Location 2', occupancy: '60%' },
    { name: 'PG 3', location: 'Location 3', occupancy: '90%' },
  ];
  
  // Populate PG List
  const pgList = document.querySelector('.pg-list');
  pgData.forEach(pg => {
    const pgItem = document.createElement('div');
    pgItem.className = 'pg-item';
    pgItem.innerHTML = `
      <h3>${pg.name}</h3>
      <p>Location: ${pg.location}</p>
      <p>Occupancy: ${pg.occupancy}</p>
    `;
    pgList.appendChild(pgItem);
  });