      canvas  = $('#pad')[0];
      context = canvas.getContext("2d");
      pendown = false;

      $('#pad').mousemove(function(event)
      {
        var xpos = event.pageX - canvas.offsetLeft;
        var ypos = event.pageY - canvas.offsetTop;

        if (pendown) {
            context.lineTo(xpos, ypos)
        }
        else {
            context.moveTo(xpos, ypos);
        }
        context.stroke()
      });

      $('#pad').mousedown(function() { 
          pendown = true;  
        } );

      $('#pad').mouseup(function() { 
          pendown = false; 
        } );

        $('#blue').click(function() {
            context.strokeStyle = 'blue';
        });

        $('#green').click(function() {
            context.strokeStyle = 'green';
          });
        
          $('#black').click(function() {
            context.strokeStyle = 'black';
          });
        
          $('#erase').click(function() {
            context.strokeStyle = canvas.style.background;
          });
        
          $('#small').click(function() {
            context.lineWidth = 1;
          });
        
          $('#medium').click(function() {
            context.lineWidth = 5;
          });
        
          $('#large').click(function() {
            context.lineWidth = 10;
          });
        
          $('#clear').click(function() {
            context.clearRect(0, 0, canvas.width, canvas.height);
          });

