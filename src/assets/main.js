$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/lawrencesayas.json',
    dataType: 'jsonp',
    success: function(response) {
      showCourses(response.courses.completed);
    }
  });

  function showCourses(courses){
    console.log(courses);

    courses.forEach(function(course){

      var $badges = '#badges'

      var $course = $('<div />', {
        'class': 'course'
      }).appendTo($badges);

      $('<h3 />', {
        text: course.title
      }).appendTo($course);

      $('<img />', {
        src: course.badge
      }).appendTo($course);

      $('<a />', {
        href: course.url,
        target: '_blank',
        'class': 'btn btn-primary',
        text: 'See Course'
      }).appendTo($course);
    })
  }

});
