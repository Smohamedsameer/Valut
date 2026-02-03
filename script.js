const friends = {
  sameer: {
    name: "Sameer",
    password: "mass",
    dob: "2004-02-03", // YYYY-MM-DD
     photo: "IMG_20250610_121243133~2.jpg",
    wish: "Happy Birthday Sameer 🎉 May all your dreams come true!",
    memories: "From madarasa bunk days to late night talks, every memory with you is gold ❤️.",
    memoriess: "❤️"
  },
  javeed: {
    name: "Javeed",
    password: "kamaal12",
    dob: "2004-12-14",
    wish: "Happy Birthday Javeed 🎂 Keep shining always!",
    memories: "We laughed, struggled, and grew together. These memories stay forever 🌟"
  },
  mujeeb: {
    name: "Mujeebur Rahman",
    password: "mass",
    dob: "2004-02-03", // YYYY-MM-DD
     photo: "muj.jpg",
    wish: "Happy Birthday Rahman 🎉 May all your dreams come true!",
    memories: "From college bunk days to late night talks, every memory with you is gold ❤️.",
    memoriess: "You are a genuinely good person—never let temporary habits hide that goodness.❤️",
    memories1:"Your fun, playful nature brings smiles—just always pair it with respect.",
    memories2:"Background doesnot define destiny : Coming from a middle-class family builds strength, humility, and hunger to grow.",
    memories3:"Control habits before habits control you : You do not need to change overnight—start with awareness and discipline.",
    memories4:"Respect yourself first : When you value your body, time, and goals—others will value you too.",
 memories5:"Your circle shapes your future : Choose friends who push you forward, not habits that pull you back.",
  memories6:"Midnight cooking fried rice with tea at 1 a.m. — no permission, only courage 😄.Silent laughter in the hostel kitchen, praying no warden appears ",
    memories7:"That unexpected day when he fell into the well — scary but unforgettable.Nazar usthad punishment — standing inside the well the whole day",
    memories8:"You slept for hours in the class, so peacefully, that it did not just affect you—the entire class got punished 😅.And as if that was not enough, you were shouted at by the Mansoor hafiz 😅",
    memories9:"came the cricket ground moments. Playing cricket on a half pitch, full confidence, full energy. Suddenly you missed the ball, and in one sharp move I stumped you ❤️.",
    memories10:"Ya Allah, forgive his past, protect his present, and guide his future.Grant him good health, a clean heart, strong īmān, and halal success.Remove harmful habits from his life and replace them with discipline, wisdom, and righteousness.Surround him with good company, keep him firm on the straight path,make him a source of الخير for his family and others,and grant him a beautiful ending with Your mercy and Jannatul Firdaus."
  },
};

function verify() {
  const nameKey = document.getElementById("name").value;
  const pass = document.getElementById("pass").value;
  const date = document.getElementById("dob").value;
  const error = document.getElementById("error");

  if (!nameKey || !pass || !date) {
    error.innerText = "Please Fill The Value";
    return;
  }

  const friend = friends[nameKey];

  // Password check
  if (friend.password !== pass) {
    error.innerText = "❌ Wrong password";
    return;
  }

  // Today's date
  const today = new Date();
  const todayDay = today.getDate();
  const todayMonth = today.getMonth() + 1;

  // Friend DOB
  const dob = new Date(friend.dob);
  const dobDay = dob.getDate();
  const dobMonth = dob.getMonth() + 1;

  // DOB check
  if (todayDay === dobDay && todayMonth === dobMonth) {
  document.querySelector(".card").classList.add("unlock");

  localStorage.setItem("friendData", JSON.stringify(friend));

  setTimeout(() => {
    window.location.href = "wishes.html";
  }, 800);
}
 else {
  const nextBirthday = new Date(today.getFullYear(), dobMonth - 1, dobDay);

  if (nextBirthday < today) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }

  const diff = nextBirthday - today;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

  document.getElementById("countdown").innerText =
    `⏳ ${days} days ${hours} hours left for your birthday 🎂`;

  error.innerText = "This page opens only on your birthday";
}

}
function togglePass() {
  const pass = document.getElementById("pass");
  pass.type = pass.type === "password" ? "text" : "password";
}
