<template>
    <div>
      <h1>Team</h1>
      <table class="custom-table">
        <thead>
          <tr>
            <th class="w-20">Firstname</th>
            <th class="w-20">Lastname</th>
            <th class="w-20">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="w-20">John</td>
            <td class="w-20">Doe</td>
            <td class="w-20">john@example.com</td>
          </tr>
          <tr>
            <td class="w-20">Mary</td>
            <td class="w-20">Moe</td>
            <td class="w-20">mary@example.com</td>
          </tr>
          <tr>
            <td class="w-20">July</td>
            <td class="w-20">Dooley</td>
            <td class="w-20">july@example.com</td>
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
  