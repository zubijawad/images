
var studentsProfil = [
 {
    Name: "Rabab ali",
    Age: 23,
    Course: "modern Web Development Application",
    Email: "rabab@12345gmail.com",
    Image: "https://thumbs.dreamstime.com/b/turkish-girl-portrait-turkish-years-girl-looking-camera-selective-focus-174959234.jpg",

 },
 { Name: "alice",
 Age: "24",
 Course: "model",
 Email: "alice@7654gnail.com",
 Image: "data:image/jpeg;base64,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"

},

 {
    Name: "Raza Khan",
    Age: 28,
    Course: "Data Science",
    Email: "khanraza2345gmail.com",
    Image: "https://i.pinimg.com/236x/38/02/6f/38026f6056749e4bc93fa16041070070.jpg",

 },

 {
    Name: "Sara Baloch",
    Age: 30,
    Course: "UI/UX",
    Email: "sarabaloch@3456gmail.com",
    Image: "https://i.pinimg.com/474x/95/70/92/9570927f64aee42ddba0896f6bb466b6.jpg",
 },

 {
    Name: "alliya Abro",
    Age: 26,
    Course: "Cloud Enginnering",
    Email: "alliya789@gmail.com",
    Image: "https://th.bing.com/th/id/R.4cea3e4ce7bb14794d955e03311bd939?rik=SFY0sRSg2ESurQ&pid=ImgRaw&r=0",
 },

 {
    Name: "Burhan Khan",
    Age: 34,
    Course: "Cyber Sceruity",
    Email: "burhan5678@gmail.com",
    Image: "https://img.freepik.com/premium-photo/charismatic-11yearold-turkish-boy-with-gentle-smile_1308-151132.jpg?w=2000",
 },

 {
    Name: "Bilal Ahmed",
    Age: 34,
    Course: "Robounting",
    Email: "bilalahmed3456@gmail.com",
    Image: "https://tse1.explicit.bing.net/th/id/OIP.ZmKelMuLeukM3aCyq32ObAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
 },

{
    Name: "Orangzaib Brohi",
    Age: 38,
    Course: "Grahpic designing",
    Email: "brohi890@gmail.com",
    Image: "https://img.freepik.com/premium-photo/resolute-15yearold-turkish-boy-with-steadfast-gaze_1308-153672.jpg",
},

{
    Name: "Laiba Asif",
    Age: 28,
    Course: "Phyton Programimg",
    Email: "laibaasif456@gmail.com",
    Image: "https://th.bing.com/th/id/R.879f85c86d4f3946af6914cc0d7391f0?rik=iQwwh6TUawBZNA&pid=ImgRaw&r=0",
},

{
    Name: "alizay Fatima",
    Age: 26,
    Course: "Advance JavaScript Learning",
    Email: "alizayfatima8790@gmail.com",
    Image: "https://tse3.mm.bing.net/th/id/OIP.RlEtJaFi2fIZva8KDgfmswHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
},

{
    Name: "Umm e laila",
    Age: 25,
    Course: "font-end development",
    Email: "laila2345@gmail.com",
    Image: "https://i.pinimg.com/originals/1c/71/75/1c717572f1d98a3c65fd42bafc45cce0.jpg",
},

]
console.log(studentsProfil);

const container = document.getElementById("cardContainer");

studentsProfil.forEach(student => {
    const card = document.createElement("div");
    card.className = "card";

card.innerHTML = `
        <img src="${student.Image}" alt="${student.Name}">
        <div class="info">
          <p><strong>Name:</strong> ${student.Name}</p>
          <p><strong>Age:</strong> ${student.Age}</p>
          <p><strong>Course:</strong> ${student.Course}</p>
          <p><strong>Email:</strong> ${student.Email}</p>
        </div>
      `;

      container.appendChild(card);
    });

 function toggleMode() {
    document.body.classList.toggle('dark');
   }