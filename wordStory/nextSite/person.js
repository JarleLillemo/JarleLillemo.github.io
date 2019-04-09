
function Person(first, last, age, gender, interests) {
  this.name = {
    'first': first,
    'last': last,
  };

  this.gender = gender;
  this.age = age;
  this.interests = interests;

    if(this.gender === 'male') {
        this.pronoun = "he";
      } else if (this.gender === 'female')  {
        this.pronoun = 'she';
      } else {
        this.pronoun = "they";
      }


  this.bio = function() {
    alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ' + this.pronoun + ' likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  };


}
