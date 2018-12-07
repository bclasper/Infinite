var moviesDiv = document.querySelector('#Movies');
var currentDate = new Date();
var currentMonth = currentDate.getMonth()  + 1;

if (currentMonth <= 6) { // JAN-JUN
  moviesDiv.innerHTML = `
  <table>
    <tr>
      <th>Baby Driver</th>
      <th>Grease</th>
      <th>Star Wars the last jedi</th>
    </tr>
    <tr>
      <td><img src="Baby Driver.png" width= "400" height= "550" text="Baby Driver"></td>
      <td><img src="Grease.png" width= "400" height= "550"></td>
      <td><img src="Star Wars The Last Jedi.png" width= "400" height= "550"></td>
    </tr>
    <tr>
      <td>£/ for an child ticket</td>
      <td>£7 for an child ticket</td>
      <td>£8 for an child ticket</td>
    </tr>
    <tr>
      <td>£4 for an student ticket</td>
      <td>£6 for an student ticket</td>
      <td>£7 for an student ticket</td>
    </tr>
    <tr>
      <td>£6 for an adult ticket</td>
      <td>£8 for an adult ticket</td>
      <td>£9 for an adult ticket</td>
    </tr>
  </table>
  `
} else if (currentMonth >= 7) { // JUL-DEC
  moviesDiv.innerHTML = `
  <table>
    <tr>
      <th>Blade Runner</th>
      <th>Matrix</th>
      <th>Venom 2018</th>
    </tr>
    <tr>
      <td><img src="BladeRunner.jpg" width= "400" height= "550" text="Baby Driver"></td>
      <td><img src="matrix.jpg" width= "400" height= "550"></td>
      <td><img src="venompostertransform.jpg" width= "400" height= "550"></td>
    </tr>
    <tr>
      <td>£/ for an child ticket</td>
      <td>£/ for an child ticket</td>
      <td>£8 for an child ticket</td>
    </tr>
    <tr>
      <td>£4 for an student ticket</td>
      <td>£6 for an student ticket</td>
      <td>£7 for an student ticket</td>
    </tr>
    <tr>
      <td>£6 for an adult ticket</td>
      <td>£8 for an adult ticket</td>
      <td>£9 for an adult ticket</td>
    </tr>
  </table>
  `
}
// function isEven(num) {
//   return num % 2 === 0;
// }
