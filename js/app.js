$(document).ready(function() {

$(".header").on('click',function() {
	location.reload();
});

$(".myButton").on('click',function() {

	$(".game").show();
	$(".introduction").hide();
	$(".hint-map").show();
	Questions(pagenum);
});

	var question_answers = [
		{Country: "Afghanistan", CorrectAnswer: "Kabul", AnswerSet:["Kabul","Damascus","Beirut","Nicosia"], Coord:[34.28,69.11]},
		{Country: "Albania", CorrectAnswer: "Tirana", AnswerSet:["Tirana","Vatican City","Zagreb","Vaduz"], Coord:[41.18,19.49]},
		{Country: "Algeria", CorrectAnswer: "Algiers", AnswerSet:["Algiers","Mbabane","Khartoum","Tripoli"], Coord:[36.42,3.08]},
		{Country: "Andorra", CorrectAnswer: "Andorra la Vella", AnswerSet:["Andorra la Vella","Belgrade","Pristina","Amsterdam"], Coord:[42.31,1.32]},
		{Country: "Angola", CorrectAnswer: "Luanda", AnswerSet:["Luanda","Antananarivo","Asmara","Accra"], Coord:[-8.50,13.15]},
		{Country: "Antigua & Barbuda", CorrectAnswer: "Saint John's", AnswerSet:["Saint John's","Tegucigalpa","Panama City","Roseau"], Coord:[17.20,-61.48]},
		{Country: "Argentina", CorrectAnswer: "Buenos Aires", AnswerSet:["Buenos Aires","Caracas","Cordoba","Quito"], Coord:[-36.30,-60.00]},
		{Country: "Armenia", CorrectAnswer: "Yerevan", AnswerSet:["Yerevan","Kathmandu","Hanoi","Manila"], Coord:[40.10,44.31]},
		{Country: "Australia", CorrectAnswer: "Canberra", AnswerSet:["Canberra","Suva","Palikir","Funafuti"], Coord:[-35.15,149.00]},
		{Country: "Austria", CorrectAnswer: "Vienna", AnswerSet:["Vienna","Andorra la Vella","Chișinău","Ljubljana"], Coord:[48.12,16.22]},
		{Country: "Azerbaijan", CorrectAnswer: "Baku", AnswerSet:["Baku","Islamabad","Naypyidaw","Tokyo"], Coord:[40.29,49.56]},
		{Country: "Bahamas", CorrectAnswer: "Nassau", AnswerSet:["Nassau","Guatemala City","Castries","Kingston"], Coord:[25.05,-77.20]},
		{Country: "Bahrain", CorrectAnswer: "Manama", AnswerSet:["Manama","Yerevan","Ulaanbaatar","Astana"], Coord:[26.10,50.30]},
		{Country: "Bangladesh", CorrectAnswer: "Dhaka", AnswerSet:["Dhaka","Amman","Phnom Penh","Bandar Seri Begawan"], Coord:[23.43,90.26]},
		{Country: "Barbados", CorrectAnswer: "Bridgetown", AnswerSet:["Bridgetown","Saint John's","Roseau","San José"], Coord:[13.05,-59.30]},
		{Country: "Belarus", CorrectAnswer: "Minsk", AnswerSet:["Minsk","Bucharest","Moscow","Sarajevo"], Coord:[53.52,27.30]},
		{Country: "Belgium", CorrectAnswer: "Brussels", AnswerSet:["Brussels","Bern","Ljubljana","Riga"], Coord:[50.51,4.21]},
		{Country: "Belize", CorrectAnswer: "Belmopan", AnswerSet:["Belmopan","San Salvador","Washington D.C.","Basseterre"], Coord:[17.18,-88.30]},
		{Country: "Benin", CorrectAnswer: "Porto-Novo or Cotonou", AnswerSet:["Porto-Novo or Cotonou","Praia","Addis Ababa","Maseru"], Coord:[6.23,2.42]},
		{Country: "Bhutan", CorrectAnswer: "Thimphu", AnswerSet:["Thimphu","Baku","Ankara","Taipei"], Coord:[27.31,89.45]},
		{Country: "Bolivia", CorrectAnswer: "La Paz or Sucre", AnswerSet:["La Paz or Sucre","Montevideo","Santiago","Georgetown"], Coord:[-16.20,-68.10]},
		{Country: "Bosnia & Herzegovina", CorrectAnswer: "Sarajevo", AnswerSet:["Sarajevo","Nicosia","Vilnius","Vatican City"], Coord:[43.52,18.26]},
		{Country: "Botswana", CorrectAnswer: "Gaborone", AnswerSet:["Gaborone","Pretoria, Cape Town or Bloemfontein","Bissau","Conakry"], Coord:[-24.45,25.57]},
		{Country: "Brazil", CorrectAnswer: "Brasília", AnswerSet:["Brasília","Santiago","Caracas","Buenos Aires"], Coord:[-15.47,-47.55]},
		{Country: "Brunei", CorrectAnswer: "Bandar Seri Begawan", AnswerSet:["Bandar Seri Begawan","Ulaanbaatar","Vientiane","Beijing"], Coord:[4.52,115.00]},
		{Country: "Bulgaria", CorrectAnswer: "Sofia", AnswerSet:["Sofia","Vilnius","Zagreb","Athens"], Coord:[42.45,23.20]},
		{Country: "Burkina Faso", CorrectAnswer: "Ouagadougou", AnswerSet:["Ouagadougou","Porto-Novo or Cotonou","Freetown","Windhoek"], Coord:[12.15,-1.30]},
		{Country: "Burma", CorrectAnswer: "Naypyidaw", AnswerSet:["Naypyidaw","Jakarta","Thimphu","Manama"], Coord:[22.00,96.00]},
		{Country: "Burundi", CorrectAnswer: "Bujumbura", AnswerSet:["Bujumbura","Khartoum","Maputo","Addis Ababa"], Coord:[-3.16,29.18]},
		{Country: "Cambodia", CorrectAnswer: "Phnom Penh", AnswerSet:["Phnom Penh","Beirut","Tbilisi","Damascus"], Coord:[11.33,104.50]},
		{Country: "Cameroon", CorrectAnswer: "Yaoundé", AnswerSet:["Yaoundé","N'Djamena","Nouakchott","Windhoek"], Coord:[3.50,11.35]},
		{Country: "Canada", CorrectAnswer: "Ottawa", AnswerSet:["Ottawa","Santo Domingo","San José","Port-au-Prince"], Coord:[45.27,-75.42]},
		{Country: "Cape Verde", CorrectAnswer: "Praia", AnswerSet:["Praia","Cairo","Kigali","Brazzaville"], Coord:[15.02,-23.34]},
		{Country: "Central African Republic", CorrectAnswer: "Bangui", AnswerSet:["Bangui","Djibouti","Tunis","Yaoundé"], Coord:[4.23,18.35]},
		{Country: "Chad", CorrectAnswer: "N'Djamena", AnswerSet:["N'Djamena","Luanda","Lusaka","Libreville"], Coord:[12.10,14.59]},
		{Country: "Chile", CorrectAnswer: "Santiago", AnswerSet:["Santiago","Lima","Quito","Caracas"], Coord:[-33.24,-70.40]},
		{Country: "China", CorrectAnswer: "Beijing", AnswerSet:["Beijing","New Delhi","Singapore","Dili"], Coord:[39.55,116.20]},
		{Country: "Colombia", CorrectAnswer: "Bogotá", AnswerSet:["Bogotá","Georgetown","Brasília","Asunción"], Coord:[4.34,-74.00]},
		{Country: "Comoros", CorrectAnswer: "Moroni", AnswerSet:["Moroni","Nouakchott","Luanda","Dodoma"], Coord:[-11.40,43.16]},
		{Country: "Congo (Dem. Rep.)", CorrectAnswer: "Kinshasa", AnswerSet:["Kinshasa","Lomé","Lilongwe","Luanda"], Coord:[-4.20,15.15]},
		{Country: "Congo (Rep. of.)", CorrectAnswer: "Brazzaville", AnswerSet:["Brazzaville","Libreville","Monrovia","Juba"], Coord:[-4.09,15.12]},
		{Country: "Costa Rica", CorrectAnswer: "San José", AnswerSet:["San José","Saint George's","Managua","Port-of-Spain"], Coord:[9.55,-84.02]},
		{Country: "Cote d'Ivoire", CorrectAnswer: "Yamoussoukro", AnswerSet:["Yamoussoukro","Dodoma","Kampala","Praia"], Coord:[6.49,-5.17]},
		{Country: "Croatia", CorrectAnswer: "Zagreb", AnswerSet:["Zagreb","Pristina","Reykjavík","San Marino"], Coord:[45.50,15.58]},
		{Country: "Cuba", CorrectAnswer: "Havana", AnswerSet:["Havana","Bridgetown","Port-of-Spain","Ottawa"], Coord:[23.08,-82.22]},
		{Country: "Cyprus", CorrectAnswer: "Nicosia", AnswerSet:["Nicosia","Sarajevo","Kabul","Amman"], Coord:[35.10,33.25]},
		{Country: "Czech Republic", CorrectAnswer: "Prague", AnswerSet:["Prague","Helsinki","Vienna","Sofia"], Coord:[50.05,14.22]},
		{Country: "Denmark", CorrectAnswer: "Copenhagen", AnswerSet:["Copenhagen","Minsk","Bratislava","Belgrade"], Coord:[55.41,12.34]},
		{Country: "Djibouti", CorrectAnswer: "Djibouti", AnswerSet:["Djibouti","Kigali","Praia","Rabat"], Coord:[11.08,42.20]},
		{Country: "Dominica", CorrectAnswer: "Roseau", AnswerSet:["Basseterre","Roseau","Port Prince","Kingston"], Coord:[15.20,-61.24]},
		{Country: "Dominican Republic", CorrectAnswer: "Santo Domingo", AnswerSet:["San José","Santo Domingo","Port-au-Prince","Havana"], Coord:[18.30,-69.59]},
		{Country: "East Timor", CorrectAnswer: "Dili", AnswerSet:["Muscat","Dili","Manama","Beirut"], Coord:[-8.29,125.30]},
		{Country: "Ecuador", CorrectAnswer: "Quito", AnswerSet:["Paramaribo","Quito","Lima","La Paz or Sucre"], Coord:[-0.15,-78.35]},
		{Country: "Egypt", CorrectAnswer: "Cairo", AnswerSet:["Conakry","Cairo","Bangui","Freetown"], Coord:[30.01,31.14]},
		{Country: "El Salvador", CorrectAnswer: "San Salvador", AnswerSet:["Port-au-Prince","San Salvador","Ottawa","Tegucigalpa"], Coord:[13.40,-89.10]},
		{Country: "Equatorial Guinea", CorrectAnswer: "Malabo", AnswerSet:["Accra","Malabo","Moroni","Niamey"], Coord:[3.45,8.50]},
		{Country: "Eritrea", CorrectAnswer: "Asmara", AnswerSet:["Yaoundé","Asmara","Port Louis","Abuja"], Coord:[15.19,38.55]},
		{Country: "Estonia", CorrectAnswer: "Tallinn", AnswerSet:["Bratislava","Tallinn","Tirana","Podgorica"], Coord:[59.22,24.48]},
		{Country: "Ethiopia", CorrectAnswer: "Addis Ababa", AnswerSet:["Maputo","Addis Ababa","São Tomé","Victoria"], Coord:[9.02,38.42]},
		{Country: "Fiji", CorrectAnswer: "Suva", AnswerSet:["Nukuʻalofa","Suva","Port Vila","Canberra"], Coord:[-18.06,178.30]},
		{Country: "Finland", CorrectAnswer: "Helsinki", AnswerSet:["Monaco","Helsinki","Bucharest","Reykjavík"], Coord:[60.15,25.03]},
		{Country: "France", CorrectAnswer: "Paris", AnswerSet:["Tallinn","Paris","Kiev","Thimphu"], Coord:[48.50,2.20]},
		{Country: "Gabon", CorrectAnswer: "Libreville", AnswerSet:["Tunis","Libreville","Victoria","Lomé"], Coord:[0.25,9.26]},
		{Country: "Gambia", CorrectAnswer: "Banjul", AnswerSet:["Lusaka","Banjul","Antananarivo","Bujumbura"], Coord:[13.28,-16.40]},
		{Country: "Georgia", CorrectAnswer: "Tbilisi", AnswerSet:["Pyongyang","Tbilisi","Malé","Dhaka"], Coord:[41.43,44.50]},
		{Country: "Germany", CorrectAnswer: "Berlin", AnswerSet:["Chișinău","Berlin","Rome","Bratislava"], Coord:[52.30,13.25]},
		{Country: "Ghana", CorrectAnswer: "Accra", AnswerSet:["São Tomé","Accra","Rabat","Bangui"], Coord:[5.35,-0.06]},
		{Country: "Greece", CorrectAnswer: "Athens", AnswerSet:["Lisbon","Athens","Stockholm","Pristina"], Coord:[37.58,23.46]},
		{Country: "Grenada", CorrectAnswer: "Saint George's", AnswerSet:["Kingston","Saint George's","Santo Domingo","Saint John's"], Coord:[12.05,-61.75]},
		{Country: "Guatemala", CorrectAnswer: "Guatemala City", AnswerSet:["Ottawa","Guatemala City","Mexico City","Belmopan"], Coord:[14.40,-90.22]},
		{Country: "Guinea", CorrectAnswer: "Conakry", AnswerSet:["Addis Ababa","Conakry","Mogadishu","Lusaka"], Coord:[9.29,-13.49]},
		{Country: "Guinea-Bissau", CorrectAnswer: "Bissau", AnswerSet:["Maseru","Bissau","Ouagadougou","Kigali"], Coord:[11.45,-15.45]},
		{Country: "Guyana", CorrectAnswer: "Georgetown", AnswerSet:["Quito","Georgetown","Montevideo","Lima"], Coord:[6.50,-58.12]},
		{Country: "Haiti", CorrectAnswer: "Port-au-Prince", AnswerSet:["Managua","Port-au-Prince","Guatemala City","Panama City"], Coord:[18.40,-72.20]},
		{Country: "Honduras", CorrectAnswer: "Tegucigalpa", AnswerSet:["Roseau","Tegucigalpa","San Salvador","Managua"], Coord:[14.05,-87.14]},
		{Country: "Hungary", CorrectAnswer: "Budapest", AnswerSet:["Pristina","Budapest","Berlin","Skopje"], Coord:[47.29,19.05]},
		{Country: "Iceland", CorrectAnswer: "Reykjavík", AnswerSet:["San Marino","Reykjavík","Warsaw","Rome"], Coord:[64.10,-21.57]},
		{Country: "India", CorrectAnswer: "New Delhi", AnswerSet:["Vientiane","New Delhi","Seoul","Riyadh"], Coord:[28.37,77.13]},
		{Country: "Indonesia", CorrectAnswer: "Jakarta", AnswerSet:["Kuala Lumpur","Jakarta","Jerusalem","Sana'a"], Coord:[-6.09,106.40]},
		{Country: "Iran", CorrectAnswer: "Tehran", AnswerSet:["Manama","Tehran","Sana'a","Tashkent"], Coord:[35.44,51.30]},
		{Country: "Iraq", CorrectAnswer: "Baghdad", AnswerSet:["Tbilisi","Baghdad","Dili","Jerusalem"], Coord:[33.20,44.30]},
		{Country: "Ireland", CorrectAnswer: "Dublin", AnswerSet:["Athens","Dublin","London","Guiness"], Coord:[53.21,-6.15]},
		{Country: "Israel", CorrectAnswer: "Jerusalem", AnswerSet:["Taipei","Jerusalem","Yerevan","Seoul"], Coord:[31.71,-35.10]},
		{Country: "Italy", CorrectAnswer: "Rome", AnswerSet:["Vaduz","Rome","Monaco","Bern"], Coord:[41.54,12.29]},
		{Country: "Jamaica", CorrectAnswer: "Kingston", AnswerSet:["Washington D.C.","Kingston","St. Moritz","Wellington"], Coord:[18.00,-76.50]},
		{Country: "Japan", CorrectAnswer: "Tokyo", AnswerSet:["Thimphu","Tokyo","Bishkek","Yaoundé"], Coord:[35.68,139.60]},
		{Country: "Jordan", CorrectAnswer: "Amman", AnswerSet:["Ashgabat","Amman","Astana","Damascus"], Coord:[31.57,35.52]},
		{Country: "Kazakhstan", CorrectAnswer: "Astana", AnswerSet:["Tehran","Astana","Bangkok","Islamabad"], Coord:[51.10,71.30]},
		{Country: "Kenya", CorrectAnswer: "Nairobi", AnswerSet:["Tripoli","Nairobi","Conakry","Porto-Novo or Cotonou"], Coord:[-1.17,36.48]},
		{Country: "Kiribati", CorrectAnswer: "South Tarawa", AnswerSet:["Honiara","South Tarawa","Suva","Port Moresby"], Coord:[1.30,173.00]},
		{Country: "Kosovo", CorrectAnswer: "Pristina", AnswerSet:["Oslo","Pristina","Zagreb","Lisbon"], Coord:[42.66,21.16]},
		{Country: "Kuwait", CorrectAnswer: "Kuwait City", AnswerSet:["Seoul","Kuwait City","Muscat","Vientiane"], Coord:[29.30,48.00]},
		{Country: "Kyrgyzstan", CorrectAnswer: "Bishkek", AnswerSet:["Tashkent","Bishkek","Beijing","Sri Jayawardenapura, Kotte"], Coord:[42.54,74.46]},
		{Country: "Laos", CorrectAnswer: "Vientiane", AnswerSet:["Bangkok","Vientiane","Sri Jayawardenapura, Kotte","Hanoi"], Coord:[17.58,102.30]},
		{Country: "Latvia", CorrectAnswer: "Riga", AnswerSet:["Stockholm","Riga","Bern","Moscow"], Coord:[56.53,24.08]},
		{Country: "Lebanon", CorrectAnswer: "Beirut", AnswerSet:["Doha","Beirut","Dushanbe","New Delhi"], Coord:[33.53,35.31]},
		{Country: "Lesotho", CorrectAnswer: "Maseru", AnswerSet:["Brazzaville","Maseru","Windhoek","Dakar"], Coord:[-29.18,27.30]},
		{Country: "Liberia", CorrectAnswer: "Monrovia", AnswerSet:["Ouagadougou","Monrovia","Pretoria, Cape Town or Bloemfontein","Khartoum"], Coord:[6.18,-10.47]},
		{Country: "Libya", CorrectAnswer: "Tripoli", AnswerSet:["Malabo","Tripoli","Banjul","Lilongwe"], Coord:[32.49,13.07]},
		{Country: "Liechtenstein", CorrectAnswer: "Vaduz", AnswerSet:["Vienna","Prague","Vaduz","Paris"], Coord:[47.08,9.31]},
		{Country: "Lithuania", CorrectAnswer: "Vilnius", AnswerSet:["Dublin","Vaduz","Vilnius","Tirana"], Coord:[54.38,25.19]},
		{Country: "Luxembourg", CorrectAnswer: "Luxembourg", AnswerSet:["Kiev","Dublin","Luxembourg","Zagreb"], Coord:[49.37,6.09]},
		{Country: "Macedonia", CorrectAnswer: "Skopje", AnswerSet:["Brussels","Sofia","Skopje","Luxembourg"], Coord:[42.01,21.26]},
		{Country: "Madagascar", CorrectAnswer: "Antananarivo", AnswerSet:["Moroni","Bujumbura","Antananarivo","Ouagadougou"], Coord:[-18.55,47.31]},
		{Country: "Malawi", CorrectAnswer: "Lilongwe", AnswerSet:["Niamey","Yaoundé","Lilongwe","São Tomé"], Coord:[-14.00,33.48]},
		{Country: "Malaysia", CorrectAnswer: "Kuala Lumpur", AnswerSet:["Dili","Manila","Kuala Lumpur","Thimphu"], Coord:[3.09,101.40]},
		{Country: "Maldives", CorrectAnswer: "Malé", AnswerSet:["Astana","Dhaka","Malé","Ulaanbaatar"], Coord:[4.00,73.28]},
		{Country: "Mali", CorrectAnswer: "Bamako", AnswerSet:["Banjul","Accra","Bamako","Mogadishu"], Coord:[12.34,-7.55]},
		{Country: "Malta", CorrectAnswer: "Valletta", AnswerSet:["Prague","Sarajevo","Valletta","Tallinn"], Coord:[35.54,14.31]},
		{Country: "Marshall Islands", CorrectAnswer: "Majuro", AnswerSet:["Funafuti","Ngerulmud","Majuro","Yaren"], Coord:[7.07,171.20]},
		{Country: "Mauritania", CorrectAnswer: "Nouakchott", AnswerSet:["Juba","Libreville","Nouakchott","Yamoussoukro"], Coord:[-20.10,57.30]},
		{Country: "Mauritius", CorrectAnswer: "Port Louis", AnswerSet:["Rabat","Abuja","Port Louis","Harare"], Coord:[-20.20,57.50]},
		{Country: "Mexico", CorrectAnswer: "Mexico City", AnswerSet:["Castries","Saint George's","Mexico City","Guadalajara"], Coord:[19.20,-99.10]},
		{Country: "Micronesia (Fed. States)", CorrectAnswer: "Palikir", AnswerSet:["Majuro","Wellington","Palikir","Nukuʻalofa"], Coord:[6.55,158.00]},
		{Country: "Moldova", CorrectAnswer: "Chișinău", AnswerSet:["Moscow","Podgorica","Chișinău","Andorra la Vella"], Coord:[47.00,28.91]},
		{Country: "Monaco", CorrectAnswer: "Monaco", AnswerSet:["Podgorica","Minsk","Monaco","Warsaw"], Coord:[43.73,7.42]},
		{Country: "Mongolia", CorrectAnswer: "Ulaanbaatar", AnswerSet:["Tokyo","Ashgabat","Ulaanbaatar","Phnom Penh"], Coord:[46.00,105.00]},
		{Country: "Montenegro", CorrectAnswer: "Podgorica", AnswerSet:["London","Athens","Podgorica","Budapest"], Coord:[42.78,19.46]},
		{Country: "Morocco", CorrectAnswer: "Rabat", AnswerSet:["Mogadishu","Algiers","Rabat","Moroni"], Coord:[32.00,-6.00]},
		{Country: "Mozambique", CorrectAnswer: "Maputo", AnswerSet:["Freetown","Porto-Novo or Cotonou","Maputo","Asmara"], Coord:[-25.58,32.32]},
		{Country: "Namibia", CorrectAnswer: "Windhoek", AnswerSet:["Bissau","Malabo","Windhoek","Banjul"], Coord:[-22.35,17.04]},
		{Country: "Nauru", CorrectAnswer: "Yaren", AnswerSet:["Ngerulmud","Funafuti","Yaren","Palikir"], Coord:[-0.53,166.90]},
		{Country: "Nepal", CorrectAnswer: "Kathmandu", AnswerSet:["Abu Dhabi","Amman","Kathmandu","Kabul"], Coord:[27.45,85.20]},
		{Country: "Netherlands", CorrectAnswer: "Amsterdam", AnswerSet:["Tirana","Helsinki","Amsterdam","Bucharest"], Coord:[52.23,4.54]},
		{Country: "New Zealand", CorrectAnswer: "Wellington", AnswerSet:["Port Vila","Majuro","Wellington","Suva"], Coord:[-41.19,174.40]},
		{Country: "Nicaragua", CorrectAnswer: "Managua", AnswerSet:["Belmopan","Tegucigalpa","Managua","Santo Domingo"], Coord:[12.06,-86.20]},
		{Country: "Niger", CorrectAnswer: "Niamey", AnswerSet:["Port Louis","N'Djamena","Niamey","Kinshasa"], Coord:[13.27,2.06]},
		{Country: "Nigeria", CorrectAnswer: "Abuja", AnswerSet:["Victoria","Dodoma","Abuja","Port Louis"], Coord:[9.05,7.32]},
		{Country: "North Korea", CorrectAnswer: "Pyongyang", AnswerSet:["Sri Jayawardenapura, Kotte","Baku","Pyongyang","Doha"], Coord:[39.09,125.30]},
		{Country: "Norway", CorrectAnswer: "Oslo", AnswerSet:["Skopje","San Marino","Oslo","Copenhagen"], Coord:[59.55,10.45]},
		{Country: "Oman", CorrectAnswer: "Muscat", AnswerSet:["Bishkek","Riyadh","Muscat","Ankara"], Coord:[23.37,58.36]},
		{Country: "Pakistan", CorrectAnswer: "Islamabad", AnswerSet:["Hanoi","Jakarta","Islamabad","Baghdad"], Coord:[33.40,73.10]},
		{Country: "Palau", CorrectAnswer: "Ngerulmud", AnswerSet:["Yaren","South Tarawa","Ngerulmud","Majuro"], Coord:[7.20,134.20]},
		{Country: "Panama", CorrectAnswer: "Panama City", AnswerSet:["Havana","Belmopan","Panama City","Saint George's"], Coord:[9.00,-79.25]},
		{Country: "Papua New Guinea", CorrectAnswer: "Port Moresby", AnswerSet:["South Tarawa","Oagadugu","Port Moresby","Oniara"], Coord:[-9.24,147.00]},
		{Country: "Paraguay", CorrectAnswer: "Asunción", AnswerSet:["La Paz or Sucre","Bogotá","Asunción","Montevideo"], Coord:[-25.10,-57.30]},
		{Country: "Peru", CorrectAnswer: "Lima", AnswerSet:["Buenos Aires","Asunción","Lima","La Paz or Sucre"], Coord:[-12.00,-77.00]},
		{Country: "Philippines", CorrectAnswer: "Manila", AnswerSet:["Singapore","Kuala Lumpur","Manila","Malé"], Coord:[14.40,121.00]},
		{Country: "Poland", CorrectAnswer: "Warsaw", AnswerSet:["Sofia","Brussels","Warsaw","Reykjavík"], Coord:[52.13,21.00]},
		{Country: "Portugal", CorrectAnswer: "Lisbon", AnswerSet:["Paris","Copenhagen","Lisbon","Sofia"], Coord:[38.42,-9.10]},
		{Country: "Qatar", CorrectAnswer: "Doha", AnswerSet:["Baghdad","Abu Dhabi","Doha","Baku"], Coord:[25.15,51.35]},
		{Country: "Romania", CorrectAnswer: "Bucharest", AnswerSet:["Berlin","Madrid","Bucharest","Budapest"], Coord:[44.27,26.10]},
		{Country: "Russia", CorrectAnswer: "Moscow", AnswerSet:["Madrid","Budapest","Moscow","London"], Coord:[55.75,37.61]},
		{Country: "Rwanda", CorrectAnswer: "Kigali", AnswerSet:["Asmara","Nairobi","Kigali","Malabo"], Coord:[-1.59,30.04]},
		{Country: "Samoa", CorrectAnswer: "Apia", AnswerSet:["Canberra","Honiara","Apia","Ngerulmud"], Coord:[-13.50,-171.50]},
		{Country: "San Marino", CorrectAnswer: "San Marino", AnswerSet:["Rome","Valletta","San Marino","Oslo"], Coord:[43.55,12.30]},
		{Country: "São Tomé & Príncipe", CorrectAnswer: "São Tomé", AnswerSet:["Windhoek","Dakar","São Tomé","Bissau"], Coord:[0.33,6.73]},
		{Country: "Saudi Arabia", CorrectAnswer: "Riyadh", AnswerSet:["Dhaka","Damascus","Riyadh","Abu Dhabi"], Coord:[24.41,46.42]},
		{Country: "Senegal", CorrectAnswer: "Dakar", AnswerSet:["Lilongwe","Yamoussoukro","Dakar","Gaborone"], Coord:[14.34,-17.29]},
		{Country: "Serbia", CorrectAnswer: "Belgrade", AnswerSet:["Budapest","Riga","Vienna","Belgrade"], Coord:[44.50,20.37]},
		{Country: "Seychelles", CorrectAnswer: "Victoria", AnswerSet:["Dakar","Gaborone","Djibouti","Victoria"], Coord:[-4.62,55.45]},
		{Country: "Sierra Leone", CorrectAnswer: "Freetown", AnswerSet:["Algiers","Cairo","Nairobi","Freetown"], Coord:[8.30,-13.17]},
		{Country: "Singapore", CorrectAnswer: "Singapore", AnswerSet:["Sana'a","Tehran","Kuala Lumpur","Singapore"], Coord:[1.30,103.80]},
		{Country: "Slovakia", CorrectAnswer: "Bratislava", AnswerSet:["Ljubljana","Luxembourg","Chișinău","Bratislava"], Coord:[48.10,17.07]},
		{Country: "Slovenia", CorrectAnswer: "Ljubljana", AnswerSet:["Luxembourg","Paris","Brussels","Ljubljana"], Coord:[46.04,14.33]},
		{Country: "Solomon Islands", CorrectAnswer: "Honiara", AnswerSet:["Wellington","Yaren","Apia","Honiara"], Coord:[-9.27,159.50]},
		{Country: "Somalia", CorrectAnswer: "Mogadishu", AnswerSet:["Bamako","Harare","Kampala","Mogadishu"], Coord:[2.02,45.25]},
		{Country: "South Africa", CorrectAnswer: "Pretoria, Cape Town or Bloemfontein", AnswerSet:["Abuja","Bamako","Algiers","Pretoria, Cape Town or Bloemfontein"], Coord:[-25.44,28.12]},
		{Country: "South Korea", CorrectAnswer: "Seoul", AnswerSet:["Phnom Penh","Kuwait City","Pyongyang","Seoul"], Coord:[37.31,126.50]},
		{Country: "South Sudan", CorrectAnswer: "Juba", AnswerSet:["Kampala","Djibouti","Tunis","Juba"], Coord:[4.85,31.60]},
		{Country: "Spain", CorrectAnswer: "Madrid", AnswerSet:["Riga","Amsterdam","Berlin","Madrid"], Coord:[40.25,-3.45]},
		{Country: "Sri Lanka", CorrectAnswer: "Sri Jayawardenapura, Kotte", AnswerSet:["Dushanbe","Nicosia","Tehran","Sri Jayawardenapura, Kotte"], Coord:[7.00,81.00]},
		{Country: "St. Kitts & Nevis", CorrectAnswer: "Basseterre", AnswerSet:["Nassau","Havana","Kingstown","Basseterre"], Coord:[17.17,-62.43]},
		{Country: "St. Lucia", CorrectAnswer: "Castries", AnswerSet:["Kingstown","Bridgetown","Moroni","Castries"], Coord:[14.02,-60.58]},
		{Country: "St. Vincent & the Grenadines", CorrectAnswer: "Kingstown", AnswerSet:["Panama City","Roseau","Nassau","Kingstown"], Coord:[13.10,-61.10]},
		{Country: "Sudan", CorrectAnswer: "Khartoum", AnswerSet:["Bangui","Niamey","Bamako","Khartoum"], Coord:[15.31,32.35]},
		{Country: "Suriname", CorrectAnswer: "Paramaribo", AnswerSet:["Brasília","La Paz or Sucre","Port Vila","Paramaribo"], Coord:[5.50,-55.10]},
		{Country: "Swaziland", CorrectAnswer: "Mbabane", AnswerSet:["Kinshasa","Windhoek","Cairo","Mbabane"], Coord:[-26.18,31.06]},
		{Country: "Sweden", CorrectAnswer: "Stockholm", AnswerSet:["Copenhagen","Skopje","Valletta","Stockholm"], Coord:[59.20,18.03]},
		{Country: "Switzerland", CorrectAnswer: "Bern", AnswerSet:["Warsaw","Tallinn","Vilnius","Bern"], Coord:[46.57,7.28]},
		{Country: "Syria", CorrectAnswer: "Damascus", AnswerSet:["Bandar Seri Begawan","Taipei","Dushanbe","Damascus"], Coord:[33.30,36.18]},
		{Country: "Taiwan", CorrectAnswer: "Taipei", AnswerSet:["Beijing","Pyongyang","Kuwait City","Taipei"], Coord:[23.50,121.00]},
		{Country: "Tajikistan", CorrectAnswer: "Dushanbe", AnswerSet:["Kuwait City","Tokyo","Kathmandu","Dushanbe"], Coord:[38.33,68.48]},
		{Country: "Tanzania", CorrectAnswer: "Dodoma", AnswerSet:["Bujumbura","Juba","Monrovia","Dodoma"], Coord:[-6.08,35.45]},
		{Country: "Thailand", CorrectAnswer: "Bangkok", AnswerSet:["Ankara","Bandar Seri Begawan","Yerevan","Bangkok"], Coord:[13.45,100.30]},
		{Country: "Togo", CorrectAnswer: "Lomé", AnswerSet:["Nairobi","Tripoli","Mbabane","Lomé"], Coord:[6.09,1.20]},
		{Country: "Tonga", CorrectAnswer: "Nukuʻalofa", AnswerSet:["Port Moresby","Apia","Honiara","Nukuʻalofa"], Coord:[-21.10,-174.00]},
		{Country: "Trinidad & Tobago", CorrectAnswer: "Port-of-Spain", AnswerSet:["Mexico City","Bridgetown","San Salvador","Port-of-Spain"], Coord:[10.66,-61.51]},
		{Country: "Tunisia", CorrectAnswer: "Tunis", AnswerSet:["Monrovia","Lomé","Antananarivo","Tunis"], Coord:[36.50,10.11]},
		{Country: "Turkey", CorrectAnswer: "Ankara", AnswerSet:["Naypyidaw","Tashkent","Muscat","Ankara"], Coord:[39.57,32.54]},
		{Country: "Turkmenistan", CorrectAnswer: "Ashgabat", AnswerSet:["Manila","Islamabad","Naypyidaw","Ashgabat"], Coord:[38.00,57.50]},
		{Country: "Tuvalu", CorrectAnswer: "Funafuti", AnswerSet:["Apia","Canberra","Wellington","Funafuti"], Coord:[-8.31,179.10]},
		{Country: "Uganda", CorrectAnswer: "Kampala", AnswerSet:["Harare","Kinshasa","Pretoria, Cape Town or Bloemfontein","Kampala"], Coord:[0.20,32.30]},
		{Country: "Ukraine", CorrectAnswer: "Kiev", AnswerSet:["Amsterdam","Andorra la Vella","Stockholm","Kiev"], Coord:[50.30,30.28]},
		{Country: "United Arab Emirates", CorrectAnswer: "Abu Dhabi", AnswerSet:["Kabul","New Delhi","Jakarta","Abu Dhabi"], Coord:[24.28,54.22]},
		{Country: "United Kingdom", CorrectAnswer: "London", AnswerSet:["Zagreb","Lisbon","Helsinki","London"], Coord:[51.36,-0.05]},
		{Country: "United States", CorrectAnswer: "Washington D.C.", AnswerSet:["Port-of-Spain","Nassau","Mexico City","Washington D.C."], Coord:[39.91,-77.02]},
		{Country: "Uruguay", CorrectAnswer: "Montevideo", AnswerSet:["Asunción","Georgetown","Santiago","Montevideo"], Coord:[-34.50,-56.11]},
		{Country: "Uzbekistan", CorrectAnswer: "Tashkent", AnswerSet:["Malé","Doha","Kinshasa","Tashkent"], Coord:[41.20,69.10]},
		{Country: "Vanuatu", CorrectAnswer: "Port Vila", AnswerSet:["Palikir","Nukuʻalofa","Funafuti","Port Vila"], Coord:[-17.45,168.10]},
		{Country: "Vatican City", CorrectAnswer: "Vatican City", AnswerSet:["Valletta","Belgrade","Minsk","Vatican City"], Coord:[41.90,12.45]},
		{Country: "Venezuela", CorrectAnswer: "Caracas", AnswerSet:["Bogotá","Paramaribo","Lima","Caracas"], Coord:[10.30,-66.55]},
		{Country: "Vietnam", CorrectAnswer: "Hanoi", AnswerSet:["Riyadh","Baghdad","Tbilisi","Hanoi"], Coord:[21.05,105.50]},
		{Country: "Yemen", CorrectAnswer: "Sana'a", AnswerSet:["Jerusalem","Kathmandu","Bangkok","Sana'a"], Coord:[15.33,44.20]},
		{Country: "Zambia", CorrectAnswer: "Lusaka", AnswerSet:["Gaborone","Brazzaville","N'Djamena","Lusaka"], Coord:[-15.28,28.16]},
		{Country: "Zimbabwe", CorrectAnswer: "Harare", AnswerSet:["Yamoussoukro","Maseru","Maputo","Harare"], Coord:[-17.43,31.02]}
	];

	var pagenum = 0;
	var clickAnswer = " "
	var correctAnswerCounter = 0;
	var quizz_array = [];
	
	function GenerateQuestions () {
			var i = 0;
			while (quizz_array.length <= 9) {
				var random_number = Math.floor((Math.random()*question_answers.length));
				if ($.inArray(random_number, quizz_array) == -1) {
					quizz_array.push(random_number);
					i++;
				}
			};

	// console.log(quizz_array);
	};
	
	GenerateQuestions();

	var question_answers2 = [
		question_answers[quizz_array[0]],
		question_answers[quizz_array[1]],
		question_answers[quizz_array[2]],
		question_answers[quizz_array[3]],
		question_answers[quizz_array[4]],
		question_answers[quizz_array[5]],
		question_answers[quizz_array[6]],
		question_answers[quizz_array[7]],
		question_answers[quizz_array[8]],
		question_answers[quizz_array[9]]
	];

	// console.log (question_answers2);

    var map;
    var MY_MAPTYPE_ID = 'custom_style';

    function initialize(a, b) {

		var featureOpts = [
		  {
		    stylers: [
		    	{ hue: '#F4E0BE' },
		    	{ visibility: 'simplified' },
		    	{ gamma: 0.3 },
		    	{ weight: 0.3 }
		    ]
		  },
		  {
		    elementType: 'labels',
		    stylers: [
		        { visibility: 'simplified' }
		      ]
		    },
		  {
		    featureType: 'water',
		    stylers: [
		        { color: '#FFF5E5' }
		      ]
		    }
		  ];

        var mapOptions = {
        	zoom: 3,
        	center: {lat: a, lng: b},
        	mapTypeControlOptions: {
        		mapTypeIds: [google.maps.MapTypeId.SATELLITE, MY_MAPTYPE_ID]
    		},
    		mapTypeId: MY_MAPTYPE_ID,
    		disableDefaultUI: true,
    		scrollwheel: false,
    		navigationControl: false,
    		mapTypeControl: false,
    		scaleControl: false,
    		draggable: false
  		};
        
        map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
  		var styledMapOptions = {
  			name: 'Custom Style'
  		};
  		var marker = new google.maps.Marker({
      		position: {lat: a, lng: b},
      		animation: google.maps.Animation.DROP,
      		map: map,
      		title: 'Take a guess!',
      		icon: 'http://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_purple.png'
  		});
  		var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
  		map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

      };

	function Questions(value) {
			$("#qnum").html(value+1);
			$("#countryquestion").html(question_answers2[value].Country);
			$("#ans0").html(question_answers2[value].AnswerSet[0]);
			$("#ans1").html(question_answers2[value].AnswerSet[1]);
			$("#ans2").html(question_answers2[value].AnswerSet[2]);
			$("#ans3").html(question_answers2[value].AnswerSet[3]);
			google.maps.event.addDomListener(window, 'load', initialize(question_answers2[value].Coord[0],question_answers2[value].Coord[1]));
		};

	//Questions(pagenum);
	var WrongAnswers = [];
	var Progress = function (arg, x) {
		if (arg) {
			$(".fa-square").eq(x).toggleClass("fa-check-square");
			correctAnswerCounter++;
		} else {
			$(".fa-square").eq(x).toggleClass("fa-minus-square");
			WrongAnswers.push(x);
		}
	};

	// google.maps.event.addDomListener(window, 'load', initialize(41.90,12.45));

	var FinalResult = function (n) {
		switch (n) {
			case 0:
			case 1:
			case 2:
				return ("Ouch! You better go back to your books!");
				break;
			case 3:
			case 4:
				return ("Oh my! At least you got some answers correct. Good luck next time!");
				break;
			case 5:
			case 6:
				return ("Not bad! Keep practicing!");
				break;
			case 7:
			case 8:
				return ("Congratulations! Great job. Pretty neat!");
				break;
			case 9:
			case 10:
				return ("Awesome! You know your stuff! That's rad!");
				break;
		}
	}


	$(".items-list").on('click', function() {
		clickAnswer = $(this).text();
		checkAnswer = (clickAnswer == question_answers2[pagenum].CorrectAnswer);
		if (pagenum<9) {
			Progress(checkAnswer, pagenum);
			// console.log("correct answer: "+question_answers2[pagenum].CorrectAnswer);
			// console.log("answer clicked: "+clickAnswer);
			// console.log("was the answer corret? "+checkAnswer);
			pagenum++;
			Questions(pagenum);
			
			}
		else {
			Progress(checkAnswer, pagenum);
			$(".game").hide();
			$(".hint-map").hide();
			$(".results").show();	
			$(".results-number").find($("span")).html(correctAnswerCounter);
			$(".congrats-text").html(FinalResult(correctAnswerCounter));
			if (correctAnswerCounter != 10) {
				$(".feedback").show();
				for (var w=0;w<WrongAnswers.length;w++) {
					$(".feedback-list").append("<li>"+question_answers2[WrongAnswers[w]].Country+": "+question_answers2[WrongAnswers[w]].CorrectAnswer);
				}
			};
			// console.log(WrongAnswers);
			// console.log(WrongAnswers.length);
		}
		

	});

	$("#restartbutton").on('click',function() {
		$(document).reload();
	})

});