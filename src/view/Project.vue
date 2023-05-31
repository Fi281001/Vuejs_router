<template>
    <div>
      <h1>Project</h1>
      <table class="custom-table">
        <thead>
          <tr>
            <th class="w-20">STT</th>
            <th class="w-20">NAME</th>
            <th class="w-20">QUANTITY</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="w-20">1</td>
            <td class="w-20">Giày thể thao</td>
            <td class="w-20">100</td>
          </tr>
          <tr>
            <td class="w-20">2</td>
            <td class="w-20">Giày tây</td>
            <td class="w-20">100</td>
          </tr>
          <tr>
            <td class="w-20">3</td>
            <td class="w-20">Giày luxury</td>
            <td class="w-20">50</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <style scoped>
  .custom-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .custom-table th,
  .custom-table td {
    padding: 8px;
    text-align: left;
    border: 1px solid #ddd;
  }
  
  .custom-table th {
    background-color: #f2f2f2;
    font-weight: bold;
  }
  
  .custom-table tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  </style>
  