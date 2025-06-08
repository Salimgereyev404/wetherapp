document.getElementById('gameForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const gameName = e.target.gameName.value.trim();
  const price = e.target.price.value.trim();
  const category = e.target.category.value;

  if (!gameName || !price || !category) {
    alert('Барлық өрісті толтырыңыз!');
    return;
  }

  if (isNaN(price) || parseFloat(price) <= 0) {
    alert('Баға дұрыс енгізілмеген.');
    return;
  }

  alert(`Ойын "${gameName}" сәтті қосылды!`);
  e.target.reset();
});
