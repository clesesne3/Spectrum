$(document).ready(function() {
  
  $('#results').click(function() {
    
    /* initialize variables to store scores based on user's selection of radio button answers */
    var scoreChoice1 = 0;
    var scoreChoice2 = 0;
    var scoreChoice3 = 0;
    var scoreChoice4 = 0;
    
    /* create an array of radio button answer options */
    var selection = document.getElementsByTagName('input');
    
    /* loop through array and increment scores based on user's answers */
    for (var i = 0; i < selection.length; i++) {
      if (selection[i].checked) {
        switch (selection[i].value) {
          case 'ans1':
            scoreChoice1 += 1;
            break;
          case 'ans2':
            scoreChoice2 += 1;
            break;
          case 'ans3':
            scoreChoice3 += 1;
            break;
          case 'ans4':
            scoreChoice4 += 1;
            break;
        }
      }
    }
    
    /* calculate final score based on which radio buttons were most frequently selected */
    var finalScore = Math.max(scoreChoice1, scoreChoice2, scoreChoice3, scoreChoice4);
    
    /* create variables for inserting information into results display*/
    var result = document.getElementById('answerDisplay');
    
    var array1 = ['Kids Science Labs', 'Camp BIOmed', 'WISE Camps', 'University of Washington GenOM Project'];
    var hrefArray1 = ["https://kidssciencelabs.com", "https://www.nwabr.org/events-programs/student-events/camp-biomed-0", "http://www.wisecamps.com/", "http://depts.washington.edu/genomics/hsprog/hsprograms.shtml"];
    
    var array2 = ['Girls Who Code', 'Seattle Coder Dojo', 'TechVenture Kids', 'Creative Coding 4 Kids'];
    var hrefArray2 = ["https://girlswhocode.com", "http://www.seattlecoderdojo.com", "https://techventurekids.org/", "http://www.creativecoding4kids.com/"];
    
    var array3 = ['Aerospace Camp Experience (ACE)', 'Engineering For Kids', 'FIRST Robotics Competition', 'Camp Invention'];
    var hrefArray3 = ["https://www.museumofflight.org/ace", "http://engineeringforkids.com/programs", "https://www.firstwa.org/Programs-Events/FIRST-Robotics-Competition", "http://campinvention.org/"];
    
    var array4 = ['Girls Rock Math', 'University of Washington Math Academy', 'Brain Child Learning Center Intensive Math Program', 'Zeno'];
    var hrefArray4 = ["http://www.girlsrockmathematics.com/home", "https://www.engr.washington.edu/future/k12/mathacademy", "http://brainchildlearningcenter.com/courses/math/", "http://zenomath.org/"];
    
    var list = document.createElement('ul');
    
    /* determine relevant STEM organizations/projects for user based on input and display results with created list*/
    switch(finalScore) {
      case 0:
        alert("Select responses for each question!");
        break;
        
      case scoreChoice1:
        for(var i in array1) {
          var item = document.createElement('li');
          var link = document.createElement('a');
          var linkText = document.createTextNode(array1[i]);
          link.appendChild(linkText);
          link.href = hrefArray1[i];
          link.target = '_blank';
          item.appendChild(link);
          list.appendChild(item);
        }
        result.style.border = "thin solid Black";
        result.appendChild(list);
        var saved = localStorage.getItem(result);
      	break;
        
      case scoreChoice2:
        for(var i in array2) {
          var item = document.createElement('li');
          var link = document.createElement('a');
          var linkText = document.createTextNode(array2[i]);
          link.appendChild(linkText);
          link.href = hrefArray2[i];
          link.target = '_blank';
          item.appendChild(link);
          list.appendChild(item);
        }
        result.style.border = "thin solid Black";
        result.appendChild(list);
        var saved = localStorage.getItem(result);
        break;
        
      case scoreChoice3:
        for(var i in array3) {
          var item = document.createElement('li');
          var link = document.createElement('a');
          var linkText = document.createTextNode(array3[i]);
          link.appendChild(linkText);
          link.href = hrefArray3[i];
          link.target = '_blank';
          item.appendChild(link);
          list.appendChild(item);
        }
        result.style.border = "thin solid Black";
        result.appendChild(list);
        var saved = localStorage.getItem(result);
        break;
        
      case scoreChoice4:
        for(var i in array4) {
          var item = document.createElement('li');
          var link = document.createElement('a');
          var linkText = document.createTextNode(array4[i]);
          link.appendChild(linkText);
          link.href = hrefArray4[i];
          link.target = '_blank';
          item.appendChild(link);
          list.appendChild(item);
        }
        result.style.border = "thin solid Black";
        result.appendChild(list);
        var saved = localStorage.getItem(result);
        break;
    }
    return false;
  });
  
});
