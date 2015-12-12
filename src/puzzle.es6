exports.day1Part1 = function(input) {
  var result = CalculateFloor(input);

  return result;
}

function CalculateFloor(input) {
  var floor = 0;
  
  for(var i = 0; i < input.length; i++)
  {
    if (input[i] == '(')
      floor = floor + 1;
    else if (input[i] == ')')
      floor = floor - 1;
  }
  
  return floor;
}

exports.day1Part2 = function(input) {
  var result = position(input);

  return result;
}

function position(input) {
        
  var floor = 0;
  var position = 1;
  
  for(var i = 0; i < input.length; i++)
  {
    if (input[i] == '(')
      floor = floor + 1;
    else if (input[i] == ')')
      floor = floor - 1;
      
    if (floor == -1)
      return position;
      
    position = position + 1;
  }
  
  return -1;
}

exports.day2Part1 = function(input) {
	return paperAmount(input);
}

function paperAmount(input)
{
    var result = 0;     
    var line = input.split('\n');
        
    line.forEach(function(element) {
        var split = input.split('x').sort();
        result = result + eachLine(split);
    }, this);
        
    return result;
        
}

function eachLine(input) {
    var dim1 = 3 * input[0] * input[1] + 2 * input[1] * input[2] + 2 * input[0] * input[2];
    return dim1;
}

exports.numberPresents = function(input) {
        return CalculatePresents(input);
}

exports.day3Part2 = function(input) {
        return CalculatePart2(input);
}

function CalculatePart2(input) {
        var log = ["0,0"];
        for (var s= 0; s < 2; s++)
        {
                var pos = {x:0, y:0};
                for(var i = s; i < input.length; i = i + 2)
                {
                        pos = CalculatePos(pos.x, pos.y, input[i]);
                        if ((log.indexOf(pos.x+","+pos.y)) === -1)
                        {
                                log.push(pos.x+","+pos.y);
                        }                       
                }
        }
        return log.length;
}

function CalculatePresents(input) {
        var log = ["0,0"];
        var pos = {x:0, y:0};
        for(var i = 0; i < input.length; i++)
        {
                pos = CalculatePos(pos.x, pos.y, input[i]);
                if ((log.indexOf(pos.x+","+pos.y)) === -1)
                {
                        log.push(pos.x+","+pos.y);
                }
                        
        }
        
        return log.length;
}

function CalculatePos(x,y, dir)
{
        var pos = {x:x,y:y};
        switch(dir)
        {
                case "^":
                        pos.y -= 1;
                        break;
                case "v":
                        pos.y += 1;
                        break;
                case "<":
                        pos.x -= 1;
                        break;
                case ">": 
                        pos.x += 1;
                        break;
        }
        return pos;
}
