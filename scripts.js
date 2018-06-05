var table = document.getElementById("boardTable");
			t = table.getElementsByTagName("tr");
			d = table.getElementsByTagName("td");
			var count = 0;
			var xElement = ["","","","","","","",""];
			function doWrite (i) {
				var winningCombination  = [[0,1,2],[3,4,5],[6,7,8],[0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
				xElement;
				if (count < 9 ) {
					if ( count%2 == 0 ) {
						if(xElement[i] == '' || xElement[i] == undefined ) {
							xElement[i] = "X";
							document.getElementsByTagName("td")[i].innerHTML = "X";
							console.log(xElement[i]);
						}
						
					}
					else {
						if(xElement[i] == "") {
							xElement[i] = "O";
							document.getElementsByTagName("td")[i].innerHTML = "O";
						}
					}
				}
				count = count + 1;
				if (count > 2 ) {
					let j = 0;
					while(j < 8) {
							var winCheck = xElement[winningCombination[j][0]] === xElement[winningCombination[j][1]] && xElement[winningCombination[j][0]] === xElement[winningCombination[j][2]] && xElement[winningCombination[j][0]] !== "";
							console.log(winCheck, xElement[winningCombination[j][0]], xElement[winningCombination[j][1]], xElement[winningCombination[j][2]])
							if (winCheck) {
								let gameResult = document.getElementById("gameResult");
									 gameResult.innerHTML = xElement[winningCombination[j][0]] + " " + "Win";
									 gameResult.style.borderTop = "1px solid #333"; 

								break;								
						}

						j = j + 1;
		}
	}
}


function reload () {
	location.reload();
}