// Pre-load the audio object globally
const faaahSound = new Audio("faaah.mp3");
// --- THE DATABASE ---


const masterList = [
    // --- BOLLYWOOD MOVIES ---
    { title: "3 Idiots", type: "Movie", industry: "Bollywood", context: "Cast: Aamir Khan, Kareena Kapoor, R. Madhavan" },
    { title: "Sholay", type: "Movie", industry: "Bollywood", context: "Cast: Amitabh Bachchan, Dharmendra, Hema Malini" },
    { title: "Tere Naam", type: "Movie", industry: "Bollywood", context: "Cast: Salman Khan, Bhumika Chawla" },
    { title: "Munna Bhai M.B.B.S.", type: "Movie", industry: "Bollywood", context: "Cast: Sanjay Dutt, Gracy Singh, Arshad Warsi" },
    { title: "Barfi!", type: "Movie", industry: "Bollywood", context: "Cast: Ranbir Kapoor, Priyanka Chopra, Ileana D'Cruz" },
    { title: "Lagaan", type: "Movie", industry: "Bollywood", context: "Cast: Aamir Khan, Gracy Singh" },
    { title: "PK", type: "Movie", industry: "Bollywood", context: "Cast: Aamir Khan, Anushka Sharma" },
    { title: "Dabangg", type: "Movie", industry: "Bollywood", context: "Cast: Salman Khan, Sonakshi Sinha" },
    { title: "Kuch Kuch Hota Hai", type: "Movie", industry: "Bollywood", context: "Cast: Shah Rukh Khan, Kajol, Rani Mukerji" },
    { title: "Bhool Bhulaiyaa", type: "Movie", industry: "Bollywood", context: "Cast: Akshay Kumar, Vidya Balan" },
    { title: "Dilwale Dulhania Le Jayenge", type: "Movie", industry: "Bollywood", context: "Cast: Shah Rukh Khan, Kajol" },
    { title: "Karan Arjun", type: "Movie", industry: "Bollywood", context: "Cast: Salman Khan, Shah Rukh Khan, Kajol, Mamta Kulkarni" },
    { title: "Hum Aapke Hain Koun..!", type: "Movie", industry: "Bollywood", context: "Cast: Salman Khan, Madhuri Dixit" },
    { title: "Dil To Pagal Hai", type: "Movie", industry: "Bollywood", context: "Cast: Shah Rukh Khan, Madhuri Dixit, Karisma Kapoor" },
    { title: "Baazigar", type: "Movie", industry: "Bollywood", context: "Cast: Shah Rukh Khan, Kajol, Shilpa Shetty" },
    { title: "Darr", type: "Movie", industry: "Bollywood", context: "Cast: Sunny Deol, Juhi Chawla, Shah Rukh Khan" },
    { title: "Raja Hindustani", type: "Movie", industry: "Bollywood", context: "Cast: Aamir Khan, Karisma Kapoor" },
    { title: "Pardes", type: "Movie", industry: "Bollywood", context: "Cast: Shah Rukh Khan, Mahima Chaudhry" },
    { title: "Border", type: "Movie", industry: "Bollywood", context: "Cast: Sunny Deol, Suniel Shetty, Akshaye Khanna" },
    { title: "Ishq", type: "Movie", industry: "Bollywood", context: "Cast: Aamir Khan, Ajay Devgn, Juhi Chawla, Kajol" },
    { title: "Gupt", type: "Movie", industry: "Bollywood", context: "Cast: Bobby Deol, Manisha Koirala, Kajol" },
    { title: "Soldier", type: "Movie", industry: "Bollywood", context: "Cast: Bobby Deol, Preity Zinta" },
    { title: "Biwi No.1", type: "Movie", industry: "Bollywood", context: "Cast: Salman Khan, Karisma Kapoor, Sushmita Sen" },
    { title: "Kaho Naa... Pyaar Hai", type: "Movie", industry: "Bollywood", context: "Cast: Hrithik Roshan, Ameesha Patel" },
    { title: "Mohabbatein", type: "Movie", industry: "Bollywood", context: "Cast: Amitabh Bachchan, Shah Rukh Khan, Aishwarya Rai" },
    { title: "Gadar: Ek Prem Katha", type: "Movie", industry: "Bollywood", context: "Cast: Sunny Deol, Ameesha Patel" },
    { title: "Devdas", type: "Movie", industry: "Bollywood", context: "Cast: Shah Rukh Khan, Aishwarya Rai, Madhuri Dixit" },
    { title: "Kal Ho Naa Ho", type: "Movie", industry: "Bollywood", context: "Cast: Shah Rukh Khan, Preity Zinta, Saif Ali Khan" },
    { title: "Koi... Mil Gaya", type: "Movie", industry: "Bollywood", context: "Cast: Hrithik Roshan, Preity Zinta" },
    { title: "Veer-Zaara", type: "Movie", industry: "Bollywood", context: "Cast: Shah Rukh Khan, Preity Zinta, Rani Mukerji" },
    { title: "Swades", type: "Movie", industry: "Bollywood", context: "Cast: Shah Rukh Khan, Gayatri Joshi" },
    { title: "Bunty Aur Babli", type: "Movie", industry: "Bollywood", context: "Cast: Abhishek Bachchan, Rani Mukerji" },
    { title: "Rang De Basanti", type: "Movie", industry: "Bollywood", context: "Cast: Aamir Khan, Siddharth, Soha Ali Khan" },
    { title: "Krrish", type: "Movie", industry: "Bollywood", context: "Cast: Hrithik Roshan, Priyanka Chopra" },
    { title: "Don", type: "Movie", industry: "Bollywood", context: "Cast: Shah Rukh Khan, Priyanka Chopra" },
    { title: "Chak De! India", type: "Movie", industry: "Bollywood", context: "Cast: Shah Rukh Khan" },
    { title: "Om Shanti Om", type: "Movie", industry: "Bollywood", context: "Cast: Shah Rukh Khan, Deepika Padukone" },
    { title: "Jab We Met", type: "Movie", industry: "Bollywood", context: "Cast: Shahid Kapoor, Kareena Kapoor" },
    { title: "Welcome", type: "Movie", industry: "Bollywood", context: "Cast: Akshay Kumar, Katrina Kaif, Nana Patekar" },
    { title: "Singh Is Kinng", type: "Movie", industry: "Bollywood", context: "Cast: Akshay Kumar, Katrina Kaif" },
    { title: "Ghajini", type: "Movie", industry: "Bollywood", context: "Cast: Aamir Khan, Asin" },
    { title: "Rab Ne Bana Di Jodi", type: "Movie", industry: "Bollywood", context: "Cast: Shah Rukh Khan, Anushka Sharma" },
    { title: "Wanted", type: "Movie", industry: "Bollywood", context: "Cast: Salman Khan, Ayesha Takia" },
    { title: "Zindagi Na Milegi Dobara", type: "Movie", industry: "Bollywood", context: "Cast: Hrithik Roshan, Farhan Akhtar, Abhay Deol, Katrina Kaif" },
    { title: "Rockstar", type: "Movie", industry: "Bollywood", context: "Cast: Ranbir Kapoor, Nargis Fakhri" },
    { title: "Agneepath", type: "Movie", industry: "Bollywood", context: "Cast: Hrithik Roshan, Priyanka Chopra, Sanjay Dutt" },
    { title: "Kahaani", type: "Movie", industry: "Bollywood", context: "Cast: Vidya Balan" },
    { title: "Vicky Donor", type: "Movie", industry: "Bollywood", context: "Cast: Ayushmann Khurrana, Yami Gautam" },
    { title: "Rowdy Rathore", type: "Movie", industry: "Bollywood", context: "Cast: Akshay Kumar, Sonakshi Sinha" },
    { title: "Cocktail", type: "Movie", industry: "Bollywood", context: "Cast: Saif Ali Khan, Deepika Padukone, Diana Penty" },
    { title: "English Vinglish", type: "Movie", industry: "Bollywood", context: "Cast: Sridevi" },
    { title: "Student of the Year", type: "Movie", industry: "Bollywood", context: "Cast: Varun Dhawan, Alia Bhatt, Sidharth Malhotra" },
    { title: "Yeh Jawaani Hai Deewani", type: "Movie", industry: "Bollywood", context: "Cast: Ranbir Kapoor, Deepika Padukone" },
    { title: "Chennai Express", type: "Movie", industry: "Bollywood", context: "Cast: Shah Rukh Khan, Deepika Padukone" },
    { title: "Bhaag Milkha Bhaag", type: "Movie", industry: "Bollywood", context: "Cast: Farhan Akhtar, Sonam Kapoor" },
    { title: "Queen", type: "Movie", industry: "Bollywood", context: "Cast: Kangana Ranaut" },
    { title: "2 States", type: "Movie", industry: "Bollywood", context: "Cast: Arjun Kapoor, Alia Bhatt" },
    { title: "Piku", type: "Movie", industry: "Bollywood", context: "Cast: Amitabh Bachchan, Deepika Padukone, Irrfan Khan" },
    { title: "Bajrangi Bhaijaan", type: "Movie", industry: "Bollywood", context: "Cast: Salman Khan, Kareena Kapoor" },
    { title: "Bajirao Mastani", type: "Movie", industry: "Bollywood", context: "Cast: Ranveer Singh, Deepika Padukone, Priyanka Chopra" },
    { title: "Sultan", type: "Movie", industry: "Bollywood", context: "Cast: Salman Khan, Anushka Sharma" },
    { title: "Dangal", type: "Movie", industry: "Bollywood", context: "Cast: Aamir Khan, Fatima Sana Shaikh, Sanya Malhotra" },
    { title: "Baahubali", type: "Movie", industry: "Bollywood", context: "Cast: Prabhas, Anushka Shetty, Tamannaah" },
    { title: "Secret Superstar", type: "Movie", industry: "Bollywood", context: "Cast: Zaira Wasim, Aamir Khan" },
    { title: "Padmaavat", type: "Movie", industry: "Bollywood", context: "Cast: Deepika Padukone, Shahid Kapoor, Ranveer Singh" },
    { title: "Sanju", type: "Movie", industry: "Bollywood", context: "Cast: Ranbir Kapoor" },
    { title: "Andhadhun", type: "Movie", industry: "Bollywood", context: "Cast: Ayushmann Khurrana, Tabu, Radhika Apte" },
    { title: "Simmba", type: "Movie", industry: "Bollywood", context: "Cast: Ranveer Singh, Sara Ali Khan" },
    { title: "Kabir Singh", type: "Movie", industry: "Bollywood", context: "Cast: Shahid Kapoor, Kiara Advani" },
    { title: "War", type: "Movie", industry: "Bollywood", context: "Cast: Hrithik Roshan, Tiger Shroff" },
    { title: "Tanhaji", type: "Movie", industry: "Bollywood", context: "Cast: Ajay Devgn, Saif Ali Khan, Kajol" },
    { title: "Pushpa: The Rise", type: "Movie", industry: "Bollywood", context: "Cast: Allu Arjun, Rashmika Mandanna" },
    { title: "K.G.F", type: "Movie", industry: "Bollywood", context: "Cast: Yash, Srinidhi Shetty" },
    { title: "Brahmastra", type: "Movie", industry: "Bollywood", context: "Cast: Ranbir Kapoor, Alia Bhatt, Amitabh Bachchan" },
    { title: "Pathaan", type: "Movie", industry: "Bollywood", context: "Cast: Shah Rukh Khan, Deepika Padukone, John Abraham" },
    { title: "Drishyam", type: "Movie", industry: "Bollywood", context: "Cast: Ajay Devgn, Shriya Saran, Tabu" },
    { title: "Jawan", type: "Movie", industry: "Bollywood", context: "Cast: Shah Rukh Khan, Nayanthara, Vijay Sethupathi" },
    { title: "Animal", type: "Movie", industry: "Bollywood", context: "Cast: Ranbir Kapoor, Rashmika Mandanna, Bobby Deol" },
    { title: "Dunki", type: "Movie", industry: "Bollywood", context: "Cast: Shah Rukh Khan, Taapsee Pannu" },
    { title: "Rocky Aur Rani...", type: "Movie", industry: "Bollywood", context: "Cast: Ranveer Singh, Alia Bhatt" },
    { title: "12th Fail", type: "Movie", industry: "Bollywood", context: "Cast: Vikrant Massey" },
    { title: "Stree", type: "Movie", industry: "Bollywood", context: "Cast: Rajkummar Rao, Shraddha Kapoor" },
    { title: "Housefull", type: "Movie", industry: "Bollywood", context: "Cast: Akshay Kumar, Deepika Padukone, Riteish Deshmukh" },
    { title: "Golmaal: Fun Unlimited", type: "Movie", industry: "Bollywood", context: "Cast: Ajay Devgn, Arshad Warsi, Tusshar Kapoor, Sharman Joshi" },
    { title: "Dhamaal", type: "Movie", industry: "Bollywood", context: "Cast: Riteish Deshmukh, Sanjay Dutt, Arshad Warsi" },
    { title: "Hera Pheri", type: "Movie", industry: "Bollywood", context: "Cast: Akshay Kumar, Suniel Shetty, Paresh Rawal" },
    { title: "Chup Chup Ke", type: "Movie", industry: "Bollywood", context: "Cast: Shahid Kapoor, Kareena Kapoor" },
    { title: "Bhagam Bhag", type: "Movie", industry: "Bollywood", context: "Cast: Akshay Kumar, Govinda" },
    { title: "Malamaal Weekly", type: "Movie", industry: "Bollywood", context: "Cast: Riteish Deshmukh, Paresh Rawal" },
    { title: "Garam Masala", type: "Movie", industry: "Bollywood", context: "Cast: Akshay Kumar, John Abraham" },
    { title: "No Entry", type: "Movie", industry: "Bollywood", context: "Cast: Salman Khan, Anil Kapoor, Fardeen Khan" },
    { title: "Partner", type: "Movie", industry: "Bollywood", context: "Cast: Salman Khan, Govinda, Katrina Kaif" },
    { title: "Heyy Babyy", type: "Movie", industry: "Bollywood", context: "Cast: Akshay Kumar, Fardeen Khan, Riteish Deshmukh" },
    { title: "Main Hoon Na", type: "Movie", industry: "Bollywood", context: "Cast: Shah Rukh Khan, Sushmita Sen" },
    { title: "Kabhi Khushi Kabhie Gham", type: "Movie", industry: "Bollywood", context: "Cast: Amitabh Bachchan, Shah Rukh Khan, Kajol, Kareena, Hrithik" },
    { title: "Andaz Apna Apna", type: "Movie", industry: "Bollywood", context: "Cast: Aamir Khan, Salman Khan, Raveena Tandon, Karisma Kapoor" },
    { title: "Taare Zameen Par", type: "Movie", industry: "Bollywood", context: "Cast: Aamir Khan, Darsheel Safary" },
    { title: "Pad Man", type: "Movie", industry: "Bollywood", context: "Cast: Akshay Kumar, Sonam Kapoor, Radhika Apte" },
    { title: "Toilet: Ek Prem Katha", type: "Movie", industry: "Bollywood", context: "Cast: Akshay Kumar, Bhumi Pednekar" },
    { title: "Uri: The Surgical Strike", type: "Movie", industry: "Bollywood", context: "Cast: Vicky Kaushal, Yami Gautam" },
    { title: "Kantara", type: "Movie", industry: "Bollywood", context: "Cast: Rishab Shetty" },
    { title: "Fighter", type: "Movie", industry: "Bollywood", context: "Cast: Hrithik Roshan, Deepika Padukone" },
    { title: "Hungama", type: "Movie", industry: "Bollywood", context: "Cast: Akshaye Khanna, Aftab Shivdasani, Rimi Sen" },
    { title: "Dhoom", type: "Movie", industry: "Bollywood", context: "Cast: John Abraham, Abhishek Bachchan, Uday Chopra" },
    { title: "Race", type: "Movie", industry: "Bollywood", context: "Cast: Saif Ali Khan, Akshaye Khanna, Katrina Kaif" },
    { title: "Kick", type: "Movie", industry: "Bollywood", context: "Cast: Salman Khan, Jacqueline Fernandez" },
    { title: "Bodyguard", type: "Movie", industry: "Bollywood", context: "Cast: Salman Khan, Kareena Kapoor" },
    { title: "Namastey London", type: "Movie", industry: "Bollywood", context: "Cast: Akshay Kumar, Katrina Kaif" },
    { title: "Wake Up Sid", type: "Movie", industry: "Bollywood", context: "Cast: Ranbir Kapoor, Konkona Sen Sharma" },
    { title: "Fukrey", type: "Movie", industry: "Bollywood", context: "Cast: Pulkit Samrat, Varun Sharma, Ali Fazal" },
    { title: "Company", type: "Movie", industry: "Bollywood", context: "Cast: Ajay Devgn, Vivek Oberoi" },
    { title: "Coolie No. 1", type: "Movie", industry: "Bollywood", context: "Cast: Govinda, Karisma Kapoor" },
    { title: "Hero No. 1", type: "Movie", industry: "Bollywood", context: "Cast: Govinda, Karisma Kapoor" },
    { title: "Dulhe Raja", type: "Movie", industry: "Bollywood", context: "Cast: Govinda, Raveena Tandon" },
    { title: "Haseena Maan Jaayegi", type: "Movie", industry: "Bollywood", context: "Cast: Govinda, Sanjay Dutt, Karisma Kapoor, Pooja Batra" },
    { title: "Bade Miyan Chote Miyan", type: "Movie", industry: "Bollywood", context: "Cast: Amitabh Bachchan, Govinda" },
    { title: "Judwaa", type: "Movie", industry: "Bollywood", context: "Cast: Salman Khan, Karisma Kapoor, Rambha" },
    { title: "Mr. India", type: "Movie", industry: "Bollywood", context: "Cast: Anil Kapoor, Sridevi" },
    { title: "Chachi 420", type: "Movie", industry: "Bollywood", context: "Cast: Kamal Haasan, Tabu" },
    { title: "Nayak: The Real Hero", type: "Movie", industry: "Bollywood", context: "Cast: Anil Kapoor, Rani Mukerji" },
    { title: "Sooryavansham", type: "Movie", industry: "Bollywood", context: "Cast: Amitabh Bachchan, Soundarya" },
    { title: "Khalnayak", type: "Movie", industry: "Bollywood", context: "Cast: Sanjay Dutt, Madhuri Dixit, Jackie Shroff" },
    { title: "Rangeela", type: "Movie", industry: "Bollywood", context: "Cast: Aamir Khan, Urmila Matondkar, Jackie Shroff" },
    { title: "Satya", type: "Movie", industry: "Bollywood", context: "Cast: J. D. Chakravarthy, Urmila Matondkar, Manoj Bajpayee" },
    { title: "Vaastav", type: "Movie", industry: "Bollywood", context: "Cast: Sanjay Dutt, Namrata Shirodkar" },
    { title: "Dil Chahta Hai", type: "Movie", industry: "Bollywood", context: "Cast: Aamir Khan, Saif Ali Khan, Akshaye Khanna" },
    { title: "Lakshya", type: "Movie", industry: "Bollywood", context: "Cast: Hrithik Roshan, Preity Zinta" },
    { title: "Rehnaa Hai Terre Dil Mein", type: "Movie", industry: "Bollywood", context: "Cast: R. Madhavan, Dia Mirza, Saif Ali Khan" },
    { title: "Saathiya", type: "Movie", industry: "Bollywood", context: "Cast: Vivek Oberoi, Rani Mukerji" },
    { title: "Hum Tum", type: "Movie", industry: "Bollywood", context: "Cast: Saif Ali Khan, Rani Mukerji" },
    { title: "Fanaa", type: "Movie", industry: "Bollywood", context: "Cast: Aamir Khan, Kajol" },
    { title: "My Name Is Khan", type: "Movie", industry: "Bollywood", context: "Cast: Shah Rukh Khan, Kajol" },
    { title: "Aitraaz", type: "Movie", industry: "Bollywood", context: "Cast: Akshay Kumar, Kareena Kapoor, Priyanka Chopra" },
    { title: "Dostana", type: "Movie", industry: "Bollywood", context: "Cast: Abhishek Bachchan, John Abraham, Priyanka Chopra" },
    { title: "Fashion", type: "Movie", industry: "Bollywood", context: "Cast: Priyanka Chopra, Kangana Ranaut" },
    { title: "Paa", type: "Movie", industry: "Bollywood", context: "Cast: Amitabh Bachchan, Abhishek Bachchan, Vidya Balan" },
    { title: "OMG – Oh My God!", type: "Movie", industry: "Bollywood", context: "Cast: Paresh Rawal, Akshay Kumar" },
    { title: "Special 26", type: "Movie", industry: "Bollywood", context: "Cast: Akshay Kumar, Kajal Aggarwal, Manoj Bajpayee" },
    { title: "Baby", type: "Movie", industry: "Bollywood", context: "Cast: Akshay Kumar, Taapsee Pannu" },
    { title: "Holiday", type: "Movie", industry: "Bollywood", context: "Cast: Akshay Kumar, Sonakshi Sinha" },
    { title: "Airlift", type: "Movie", industry: "Bollywood", context: "Cast: Akshay Kumar, Nimrat Kaur" },
    { title: "Rustom", type: "Movie", industry: "Bollywood", context: "Cast: Akshay Kumar, Ileana D'Cruz" },
    { title: "Ludo", type: "Movie", industry: "Bollywood", context: "Cast: Abhishek Bachchan, Aditya Roy Kapur, Rajkummar Rao" },
    { title: "Chhichhore", type: "Movie", industry: "Bollywood", context: "Cast: Sushant Singh Rajput, Shraddha Kapoor" },
    { title: "Super 30", type: "Movie", industry: "Bollywood", context: "Cast: Hrithik Roshan, Mrunal Thakur" },
    { title: "M.S. Dhoni: The Untold Story", type: "Movie", industry: "Bollywood", context: "Cast: Sushant Singh Rajput, Kiara Advani, Disha Patani" },
    { title: "83", type: "Movie", industry: "Bollywood", context: "Cast: Ranveer Singh, Deepika Padukone" },
    { title: "Mimi", type: "Movie", industry: "Bollywood", context: "Cast: Kriti Sanon, Pankaj Tripathi" },
    { title: "Bhool Bhulaiyaa 2", type: "Movie", industry: "Bollywood", context: "Cast: Kartik Aaryan, Kiara Advani, Tabu" },

    // --- BANGLA MOVIES ---
    { title: "Beder Meye Josna", type: "Movie", industry: "Bangla", context: "Cast: Ilias Kanchan, Anju Ghosh" },
    { title: "Hothat Brishti", type: "Movie", industry: "Bangla", context: "Cast: Ferdous Ahmed, Priyanka Trivedi" },
    { title: "Dipu Number Two", type: "Movie", industry: "Bangla", context: "Cast: Arun Saha, Bulbul Ahmed" },
    { title: "Monpura", type: "Movie", industry: "Bangla", context: "Cast: Chanchal Chowdhury, Farhana Mili" },
    { title: "Aynabaji", type: "Movie", industry: "Bangla", context: "Cast: Chanchal Chowdhury, Masuma Rahman Nabila" },
    { title: "Srabon Megher Din", type: "Movie", industry: "Bangla", context: "Cast: Zahid Hasan, Meher Afroz Shaon" },
    { title: "Bachelor", type: "Movie", industry: "Bangla", context: "Cast: Ferdous Ahmed, Shabnur, Humayun Faridi" },
    { title: "Ammajaan", type: "Movie", industry: "Bangla", context: "Cast: Manna, Shabnam" },
    { title: "Shoshur Bari Zindabad", type: "Movie", industry: "Bangla", context: "Cast: Riaz, Shabnur" },
    { title: "Keyamat Theke Keyamat", type: "Movie", industry: "Bangla", context: "Cast: Salman Shah, Moushumi" },
    { title: "Sujon Sokhi", type: "Movie", industry: "Bangla", context: "Cast: Salman Shah, Shabnur" },
    { title: "Shopner Thikana", type: "Movie", industry: "Bangla", context: "Cast: Salman Shah, Shabnur" },
    { title: "Denmohor", type: "Movie", industry: "Bangla", context: "Cast: Salman Shah, Moushumi" },
    { title: "Anondo Osru", type: "Movie", industry: "Bangla", context: "Cast: Salman Shah, Shabnur" },
    { title: "Molla Barir Bou", type: "Movie", industry: "Bangla", context: "Cast: Moushumi, Riaz, Shabnur" },
    { title: "Hajar Bochhor Dhore", type: "Movie", industry: "Bangla", context: "Cast: Riaz, Shashi" },
    { title: "Moner Majhe Tumi", type: "Movie", industry: "Bangla", context: "Cast: Riaz, Purnima" },
    { title: "Hridoyer Kotha", type: "Movie", industry: "Bangla", context: "Cast: Riaz, Purnima" },
    { title: "Koti Takar Kabin", type: "Movie", industry: "Bangla", context: "Cast: Shakib Khan, Apu Biswas" },
    { title: "Chacchu", type: "Movie", industry: "Bangla", context: "Cast: Shakib Khan, Apu Biswas, Dipjol" },
    { title: "Dadi Ma", type: "Movie", industry: "Bangla", context: "Cast: Shakib Khan, Apu Biswas, Dipjol" },
    { title: "Kosto", type: "Movie", industry: "Bangla", context: "Cast: Manna, Moushumi" },
    { title: "Abbajan", type: "Movie", industry: "Bangla", context: "Cast: Manna, Sathi" },
    { title: "Dui Duari", type: "Movie", industry: "Bangla", context: "Cast: Riaz, Meher Afroz Shaon, Zahid Hasan" },
    { title: "Shyamol Chhaya", type: "Movie", industry: "Bangla", context: "Cast: Humayun Faridi, Meher Afroz Shaon" },
    { title: "Agune Poroshmoni", type: "Movie", industry: "Bangla", context: "Cast: Bipasha Hayat, Asaduzzaman Noor" },
    { title: "Third Person Singular Number", type: "Movie", industry: "Bangla", context: "Cast: Nusrat Imrose Tisha, Mosharraf Karim" },
    { title: "Television", type: "Movie", industry: "Bangla", context: "Cast: Chanchal Chowdhury, Nusrat Imrose Tisha" },
    { title: "Swapnojal", type: "Movie", industry: "Bangla", context: "Cast: Pori Moni, Yash Rohan" },
    { title: "Hawa", type: "Movie", industry: "Bangla", context: "Cast: Chanchal Chowdhury, Nazifa Tushi" },
    { title: "Poran", type: "Movie", industry: "Bangla", context: "Cast: Sariful Razz, Bidya Sinha Mim" },
    { title: "Surongo", type: "Movie", industry: "Bangla", context: "Cast: Afran Nisho, Tama Mirza" },
    { title: "Priya Amar Priya", type: "Movie", industry: "Bangla", context: "Cast: Shakib Khan, Sahara" },
    { title: "Mayer Morjada", type: "Movie", industry: "Bangla", context: "Cast: Manna, Moushumi" },
    { title: "Pita Mata Sontan", type: "Movie", industry: "Bangla", context: "Cast: Alamgir, Shabana" },
    { title: "Amar Bondhu Rashed", type: "Movie", industry: "Bangla", context: "Cast: Chowdhury Zawad Afnan" },
    { title: "Matir Moyna", type: "Movie", industry: "Bangla", context: "Cast: Nurul Islam Bablu" },
    { title: "Ontore Ontore", type: "Movie", industry: "Bangla", context: "Cast: Salman Shah, Moushumi" },
    { title: "Tomake Chai", type: "Movie", industry: "Bangla", context: "Cast: Salman Shah, Shabnur" },
    { title: "Mayer Doa", type: "Movie", industry: "Bangla", context: "Cast: Manna" },
    { title: "Tej", type: "Movie", industry: "Bangla", context: "Cast: Manna" },
    { title: "Ghetuputra Komola", type: "Movie", industry: "Bangla", context: "Cast: Mamun" },
    { title: "Daruchini Dip", type: "Movie", industry: "Bangla", context: "Cast: Riaz, Zakia Bari Momo" },
    { title: "Chader Pahar", type: "Movie", industry: "Bangla", context: "Cast: Dev" },
    { title: "Khacha", type: "Movie", industry: "Bangla", context: "Cast: Jaya Ahsan" },
    { title: "Shonibar Bikel", type: "Movie", industry: "Bangla", context: "Cast: Nusrat Imrose Tisha, Zahid Hasan" },
    { title: "Damal", type: "Movie", industry: "Bangla", context: "Cast: Siam Ahmed, Bidya Sinha Mim" },
    { title: "Toofan", type: "Movie", industry: "Bangla", context: "Cast: Shakib Khan, Mimi Chakraborty" },

    // --- SONGS ---
    { title: "Lungi Dance", type: "Song", industry: "Bollywood", context: "Movie: Chennai Express | Cast: Shah Rukh Khan, Deepika Padukone" },
    { title: "Chaiyya Chaiyya", type: "Song", industry: "Bollywood", context: "Movie: Dil Se.. | Cast: Shah Rukh Khan, Malaika Arora" },
    { title: "Kala Chashma", type: "Song", industry: "Bollywood", context: "Movie: Baar Baar Dekho | Cast: Sidharth Malhotra, Katrina Kaif" },
    { title: "Tumpa Shona", type: "Song", industry: "Bangla", context: "Artist: Sumit Goswami | Cast: Sumit Goswami, Moumita" },
    { title: "O Bondhu Lal Golap", type: "Song", industry: "Bangla", context: "Movie: Mayer Doa | Cast: Manna, Kobita" },
    { title: "Tip Tip Barsa Pani", type: "Song", industry: "Bollywood", context: "Movie: Mohra | Cast: Akshay Kumar, Raveena Tandon" },
    { title: "Nagin Dance", type: "Song", industry: "General", context: "Movie: Bajatey Raho | Cast: Maryam Zakaria, Scarlett Wilson" },
    { title: "Bondhu Tin Din", type: "Song", industry: "Bangla", context: "Movie: Sujon Sokhi | Cast: Salman Shah, Shabnur" },
    { title: "Ek Do Teen", type: "Song", industry: "Bollywood", context: "Movie: Tezaab | Cast: Madhuri Dixit" },
    { title: "Main To Raste Se Ja Raha Tha", type: "Song", industry: "Bollywood", context: "Movie: Coolie No. 1 | Cast: Govinda, Karisma Kapoor" },
    { title: "Kisi Disco Mein Jaaye", type: "Song", industry: "Bollywood", context: "Movie: Bade Miyan Chote Miyan | Cast: Govinda, Raveena Tandon" },
    { title: "Sona Kitna Sona Hai", type: "Song", industry: "Bollywood", context: "Movie: Hero No. 1 | Cast: Govinda, Karisma Kapoor" },
    { title: "Akhiyon Se Goli Maare", type: "Song", industry: "Bollywood", context: "Movie: Dulhe Raja | Cast: Govinda, Raveena Tandon" },
    { title: "Chunnari Chunnari", type: "Song", industry: "Bollywood", context: "Movie: Biwi No.1 | Cast: Salman Khan, Sushmita Sen" },
    { title: "O O Jaane Jaana", type: "Song", industry: "Bollywood", context: "Movie: Pyaar Kiya To Darna Kya | Cast: Salman Khan" },
    { title: "Jeene Ke Hain Chaar Din", type: "Song", industry: "Bollywood", context: "Movie: Mujhse Shaadi Karogi | Cast: Salman Khan" },
    { title: "Chalo Ishq Ladaaye", type: "Song", industry: "Bollywood", context: "Movie: Chalo Ishq Ladaaye | Cast: Govinda, Rani Mukerji" },
    { title: "Tujhe Dekha To", type: "Song", industry: "Bollywood", context: "Movie: Dilwale Dulhania Le Jayenge | Cast: Shah Rukh Khan, Kajol" },
    { title: "Mehndi Laga Ke Rakhna", type: "Song", industry: "Bollywood", context: "Movie: Dilwale Dulhania Le Jayenge | Cast: Shah Rukh Khan, Kajol" },
    { title: "Yeh Kaali Kaali Aankhen", type: "Song", industry: "Bollywood", context: "Movie: Baazigar | Cast: Shah Rukh Khan, Kajol" },
    { title: "Ruk Ja O Dil Deewane", type: "Song", industry: "Bollywood", context: "Movie: Dilwale Dulhania Le Jayenge | Cast: Shah Rukh Khan, Kajol" },
    { title: "Bole Chudiyan", type: "Song", industry: "Bollywood", context: "Movie: Kabhi Khushi Kabhie Gham | Cast: Shah Rukh Khan, Kajol, Kareena, Hrithik" },
    { title: "You Are My Soniya", type: "Song", industry: "Bollywood", context: "Movie: Kabhi Khushi Kabhie Gham | Cast: Hrithik Roshan, Kareena Kapoor" },
    { title: "Shava Shava", type: "Song", industry: "Bollywood", context: "Movie: Kabhi Khushi Kabhie Gham | Cast: Amitabh Bachchan, Shah Rukh Khan" },
    { title: "Koi Kahe Kehta Rahe", type: "Song", industry: "Bollywood", context: "Movie: Dil Chahta Hai | Cast: Aamir Khan, Saif Ali Khan, Akshaye Khanna" },
    { title: "Ek Pal Ka Jeena", type: "Song", industry: "Bollywood", context: "Movie: Kaho Naa... Pyaar Hai | Cast: Hrithik Roshan" },
    { title: "Kaho Naa... Pyaar Hai", type: "Song", industry: "Bollywood", context: "Movie: Kaho Naa... Pyaar Hai | Cast: Hrithik Roshan, Ameesha Patel" },
    { title: "Bumbro Bumbro", type: "Song", industry: "Bollywood", context: "Movie: Mission Kashmir | Cast: Hrithik Roshan, Preity Zinta" },
    { title: "Dola Re Dola", type: "Song", industry: "Bollywood", context: "Movie: Devdas | Cast: Aishwarya Rai, Madhuri Dixit" },
    { title: "Kajra Re", type: "Song", industry: "Bollywood", context: "Movie: Bunty Aur Babli | Cast: Amitabh Bachchan, Abhishek, Aishwarya" },
    { title: "Beedi Jalaile", type: "Song", industry: "Bollywood", context: "Movie: Omkara | Cast: Bipasha Basu, Ajay Devgn, Saif Ali Khan" },
    { title: "Jhoom Barabar Jhoom", type: "Song", industry: "Bollywood", context: "Movie: Jhoom Barabar Jhoom | Cast: Abhishek Bachchan, Preity Zinta" },
    { title: "Mauja Hi Mauja", type: "Song", industry: "Bollywood", context: "Movie: Jab We Met | Cast: Shahid Kapoor, Kareena Kapoor" },
    { title: "Nagada Nagada", type: "Song", industry: "Bollywood", context: "Movie: Jab We Met | Cast: Shahid Kapoor, Kareena Kapoor" },
    { title: "Desi Girl", type: "Song", industry: "Bollywood", context: "Movie: Dostana | Cast: Priyanka Chopra, Abhishek, John Abraham" },
    { title: "Dhan Te Nan", type: "Song", industry: "Bollywood", context: "Movie: Kaminey | Cast: Shahid Kapoor" },
    { title: "Masakali", type: "Song", industry: "Bollywood", context: "Movie: Delhi-6 | Cast: Sonam Kapoor, Abhishek Bachchan" },
    { title: "All Izz Well", type: "Song", industry: "Bollywood", context: "Movie: 3 Idiots | Cast: Aamir Khan, R. Madhavan, Sharman Joshi" },
    { title: "Zoobi Doobi", type: "Song", industry: "Bollywood", context: "Movie: 3 Idiots | Cast: Aamir Khan, Kareena Kapoor" },
    { title: "Sheila Ki Jawani", type: "Song", industry: "Bollywood", context: "Movie: Tees Maar Khan | Cast: Katrina Kaif, Akshay Kumar" },
    { title: "Munni Badnaam Hui", type: "Song", industry: "Bollywood", context: "Movie: Dabangg | Cast: Malaika Arora, Salman Khan" },
    { title: "Dhinka Chika", type: "Song", industry: "Bollywood", context: "Movie: Ready | Cast: Salman Khan, Asin" },
    { title: "Chammak Challo", type: "Song", industry: "Bollywood", context: "Movie: Ra.One | Cast: Shah Rukh Khan, Kareena Kapoor" },
    { title: "Chikni Chameli", type: "Song", industry: "Bollywood", context: "Movie: Agneepath | Cast: Katrina Kaif, Hrithik Roshan" },
    { title: "Ooh La La", type: "Song", industry: "Bollywood", context: "Movie: The Dirty Picture | Cast: Vidya Balan, Naseeruddin Shah" },
    { title: "Tumhi Ho Bandhu", type: "Song", industry: "Bollywood", context: "Movie: Cocktail | Cast: Saif Ali Khan, Deepika Padukone, Diana Penty" },
    { title: "Badtameez Dil", type: "Song", industry: "Bollywood", context: "Movie: Yeh Jawaani Hai Deewani | Cast: Ranbir Kapoor, Deepika Padukone" },
    { title: "Balam Pichkari", type: "Song", industry: "Bollywood", context: "Movie: Yeh Jawaani Hai Deewani | Cast: Ranbir Kapoor, Deepika Padukone" },
    { title: "1234 Get On The Dance Floor", type: "Song", industry: "Bollywood", context: "Movie: Chennai Express | Cast: Shah Rukh Khan, Deepika Padukone" },
    { title: "Sunny Sunny", type: "Song", industry: "Bollywood", context: "Movie: Yaariyan | Cast: Himansh Kohli, Rakul Preet Singh" },
    { title: "Baby Doll", type: "Song", industry: "Bollywood", context: "Movie: Ragini MMS 2 | Cast: Sunny Leone" },
    { title: "London Thumakda", type: "Song", industry: "Bollywood", context: "Movie: Queen | Cast: Kangana Ranaut" },
    { title: "Chittiyaan Kalaiyaan", type: "Song", industry: "Bollywood", context: "Movie: Roy | Cast: Jacqueline Fernandez" },
    { title: "Gallan Goodiyaan (Dhaak Dhak Dhak yeh dil )", type: "Song", industry: "Bollywood", context: "Movie: Dil Dhadakne Do | Cast: Anil Kapoor, Shefali Shah, Ranveer, Priyanka" },
    { title: "Tukur Tukur", type: "Song", industry: "Bollywood", context: "Movie: Dilwale | Cast: Shah Rukh Khan, Kajol, Varun, Kriti" },
    { title: "Malhari", type: "Song", industry: "Bollywood", context: "Movie: Bajirao Mastani | Cast: Ranveer Singh" },
    { title: "Kar Gayi Chull", type: "Song", industry: "Bollywood", context: "Movie: Kapoor & Sons | Cast: Sidharth Malhotra, Alia Bhatt" },
    { title: "Nachde Ne Saare", type: "Song", industry: "Bollywood", context: "Movie: Baar Baar Dekho | Cast: Katrina Kaif, Sidharth Malhotra" },
    { title: "Nashe Si Chadh Gayi", type: "Song", industry: "Bollywood", context: "Movie: Befikre | Cast: Ranveer Singh, Vaani Kapoor" },
    { title: "The Breakup Song", type: "Song", industry: "Bollywood", context: "Movie: Ae Dil Hai Mushkil | Cast: Ranbir Kapoor, Anushka Sharma" },
    { title: "Ghoomar", type: "Song", industry: "Bollywood", context: "Movie: Padmaavat | Cast: Deepika Padukone, Shahid Kapoor" },
    { title: "Dilbar", type: "Song", industry: "Bollywood", context: "Movie: Satyameva Jayate | Cast: Nora Fatehi" },
    { title: "Aankh Maare", type: "Song", industry: "Bollywood", context: "Movie: Simmba | Cast: Ranveer Singh, Sara Ali Khan" },
    { title: "Coca Cola", type: "Song", industry: "Bollywood", context: "Movie: Luka Chuppi | Cast: Kartik Aaryan, Kriti Sanon" },
    { title: "Apna Time Aayega", type: "Song", industry: "Bollywood", context: "Movie: Gully Boy | Cast: Ranveer Singh" },
    { title: "Ghungroo", type: "Song", industry: "Bollywood", context: "Movie: War | Cast: Hrithik Roshan, Vaani Kapoor" },
    { title: "Bala", type: "Song", industry: "Bollywood", context: "Movie: Housefull 4 | Cast: Akshay Kumar" },
    { title: "Garmi", type: "Song", industry: "Bollywood", context: "Movie: Street Dancer 3D | Cast: Varun Dhawan, Nora Fatehi" },
    { title: "Muqabla", type: "Song", industry: "Bollywood", context: "Movie: Street Dancer 3D | Cast: Varun Dhawan, Prabhu Deva" },
    { title: "Naach Meri Rani", type: "Song", industry: "Bollywood", context: "Artist: Guru Randhawa | Cast: Guru Randhawa, Nora Fatehi" },
    { title: "Paani Paani", type: "Song", industry: "Bollywood", context: "Artist: Badshah | Cast: Badshah, Jacqueline Fernandez" },
    { title: "Bijli Bijli", type: "Song", industry: "Bollywood", context: "Artist: Hardy Sandhu | Cast: Hardy Sandhu, Palak Tiwari" },
    { title: "Srivalli", type: "Song", industry: "Bollywood", context: "Movie: Pushpa: The Rise | Cast: Allu Arjun, Rashmika Mandanna" },
    { title: "Sami Sami", type: "Song", industry: "Bollywood", context: "Movie: Pushpa: The Rise | Cast: Rashmika Mandanna, Allu Arjun" },
    { title: "Naatu Naatu", type: "Song", industry: "Bollywood", context: "Movie: RRR | Cast: Jr. NTR, Ram Charan" },
    { title: "Kesariya", type: "Song", industry: "Bollywood", context: "Movie: Brahmastra | Cast: Ranbir Kapoor, Alia Bhatt" },
    { title: "Jhoome Jo Pathaan", type: "Song", industry: "Bollywood", context: "Movie: Pathaan | Cast: Shah Rukh Khan, Deepika Padukone" },
    { title: "Besharam Rang", type: "Song", industry: "Bollywood", context: "Movie: Pathaan | Cast: Shah Rukh Khan, Deepika Padukone" },
    { title: "Tere Vaste", type: "Song", industry: "Bollywood", context: "Movie: Zara Hatke Zara Bachke | Cast: Vicky Kaushal, Sara Ali Khan" },
    { title: "Main Yahaan Hoon", type: "Song", industry: "Bollywood", context: "Movie: Veer-Zaara | Cast: Shah Rukh Khan, Preity Zinta" },
    { title: "Jumme Ki Raat", type: "Song", industry: "Bollywood", context: "Movie: Kick | Cast: Salman Khan, Jacqueline Fernandez" },
    { title: "Swag Se Swagat", type: "Song", industry: "Bollywood", context: "Movie: Tiger Zinda Hai | Cast: Salman Khan, Katrina Kaif" },
    { title: "Zingaat", type: "Song", industry: "Bollywood", context: "Movie: Dhadak | Cast: Ishaan Khatter, Janhvi Kapoor" },
    { title: "High Heels", type: "Song", industry: "Bollywood", context: "Movie: Ki & Ka | Cast: Arjun Kapoor, Kareena Kapoor" },
    { title: "Abhi Toh Party Shuru Hui Hai", type: "Song", industry: "Bollywood", context: "Movie: Khoobsurat | Cast: Sonam Kapoor, Fawad Khan" },
    { title: "Chaar Botal Vodka", type: "Song", industry: "Bollywood", context: "Movie: Ragini MMS 2 | Cast: Sunny Leone" },
    { title: "Saturday Saturday", type: "Song", industry: "Bollywood", context: "Movie: Humpty Sharma Ki Dulhania | Cast: Varun Dhawan, Alia Bhatt" },
    { title: "Selfie Le Le Re", type: "Song", industry: "Bollywood", context: "Movie: Bajrangi Bhaijaan | Cast: Salman Khan" },
    { title: "Tattad Tattad", type: "Song", industry: "Bollywood", context: "Movie: Ram-Leela | Cast: Ranveer Singh" },
    { title: "Andekhi Anjaani", type: "Song", industry: "Bollywood", context: "Movie: Mujhse Dosti Karoge! | Cast: Hrithik Roshan, Kareena, Rani" },
    { title: "Kabootar Ja Ja Ja", type: "Song", industry: "Bollywood", context: "Movie: Maine Pyar Kiya | Cast: Salman Khan, Bhagyashree" },
    { title: "Pardesi Pardesi", type: "Song", industry: "Bollywood", context: "Movie: Raja Hindustani | Cast: Aamir Khan, Karisma Kapoor" },
    { title: "Soldier Soldier", type: "Song", industry: "Bollywood", context: "Movie: Soldier | Cast: Bobby Deol, Preity Zinta" },
    { title: "Yeh Ladka Hai Deewana", type: "Song", industry: "Bollywood", context: "Movie: Kuch Kuch Hota Hai | Cast: Shah Rukh Khan, Kajol" },
    { title: "Dhoom Machale", type: "Song", industry: "Bollywood", context: "Movie: Dhoom | Cast: Esha Deol, John Abraham" },
    { title: "Aati Kya Khandala", type: "Song", industry: "Bollywood", context: "Movie: Ghulam | Cast: Aamir Khan, Rani Mukerji" },
    { title: "Pappu Can't Dance", type: "Song", industry: "Bollywood", context: "Movie: Jaane Tu... Ya Jaane Na | Cast: Imran Khan, Genelia D'Souza" },
    { title: "Galliyan", type: "Song", industry: "Bollywood", context: "Movie: Ek Villain | Cast: Sidharth Malhotra, Shraddha Kapoor" },
    { title: "Chura Ke Dil Mera", type: "Song", industry: "Bollywood", context: "Movie: Main Khiladi Tu Anari | Cast: Akshay Kumar, Shilpa Shetty" },
    { title: "Tu Cheez Badi Hai Mast", type: "Song", industry: "Bollywood", context: "Movie: Mohra | Cast: Akshay Kumar, Raveena Tandon" },
    { title: "Ole Ole", type: "Song", industry: "Bollywood", context: "Movie: Yeh Dillagi | Cast: Saif Ali Khan" },
    { title: "Main Nikla Gaddi Leke", type: "Song", industry: "Bollywood", context: "Movie: Gadar: Ek Prem Katha | Cast: Sunny Deol, Ameesha Patel" },
    { title: "Le Gayi", type: "Song", industry: "Bollywood", context: "Movie: Dil To Pagal Hai | Cast: Karisma Kapoor, Shah Rukh Khan" },
    { title: "Kolaveri D", type: "Song", industry: "Bollywood", context: "Movie: 3 | Cast: Dhanush, Shruti Haasan" },
    { title: "Hookah Bar", type: "Song", industry: "Bollywood", context: "Movie: Khiladi 786 | Cast: Akshay Kumar, Asin" },
    { title: "Fevicol Se", type: "Song", industry: "Bollywood", context: "Movie: Dabangg 2 | Cast: Kareena Kapoor, Salman Khan" },
    
    { title: "Slow Motion", type: "Song", industry: "Bollywood", context: "Movie: Bharat | Cast: Salman Khan, Disha Patani" },
    { title: "Hud Hud Dabangg", type: "Song", industry: "Bollywood", context: "Movie: Dabangg | Cast: Salman Khan" },
    { title: "Seeti Maar", type: "Song", industry: "Bollywood", context: "Movie: Radhe | Cast: Salman Khan, Disha Patani" },
    { title: "Jag Ghoomeya", type: "Song", industry: "Bollywood", context: "Movie: Sultan | Cast: Salman Khan, Anushka Sharma" },
    { title: "Tauba Tauba", type: "Song", industry: "Bollywood", context: "Movie: Bad Newz | Cast: Vicky Kaushal, Triptii Dimri" },
    { title: "My Name Is Lakhan", type: "Song", industry: "Bollywood", context: "Movie: Ram Lakhan | Cast: Anil Kapoor" },
    { title: "Saat Samundar Paar", type: "Song", industry: "Bollywood", context: "Movie: Vishwatma | Cast: Divya Bharti, Sunny Deol" },
    { title: "Jumma Chumma De De", type: "Song", industry: "Bollywood", context: "Movie: Hum | Cast: Amitabh Bachchan, Kimi Katkar" },
    { title: "Tamma Tamma Loge", type: "Song", industry: "Bollywood", context: "Movie: Thanedaar | Cast: Sanjay Dutt, Madhuri Dixit" },
    { title: "Hawa Hawai", type: "Song", industry: "Bollywood", context: "Movie: Mr. India | Cast: Sridevi" },
    { title: "Papa Kehte Hain", type: "Song", industry: "Bollywood", context: "Movie: Qayamat Se Qayamat Tak | Cast: Aamir Khan" },
    { title: "Ghar Aaja Pardesi", type: "Song", industry: "Bollywood", context: "Movie: Dilwale Dulhania Le Jayenge | Cast: Shah Rukh Khan, Kajol" },
    { title: "Didi Tera Devar Deewana", type: "Song", industry: "Bollywood", context: "Movie: Hum Aapke Hain Koun..! | Cast: Madhuri Dixit, Salman Khan" },
    { title: "Chana Jor Garam", type: "Song", industry: "Bollywood", context: "Movie: Kranti | Cast: Dilip Kumar, Manoj Kumar, Hema Malini, Parveen Babi" },
    { title: "Mere Rang Mein Rangne Wali", type: "Song", industry: "Bollywood", context: "Movie: Maine Pyar Kiya | Cast: Salman Khan, Bhagyashree" },
    { title: "Tu Tu Tu Tu Tara", type: "Song", industry: "Bollywood", context: "Movie: Sultanat | Cast: Sunny Deol, Juhi Chawla" },
    { title: "Husn Hai Suhana", type: "Song", industry: "Bollywood", context: "Movie: Coolie No. 1 | Cast: Govinda, Karisma Kapoor" },
    { title: "Mere Khwabon Mein", type: "Song", industry: "Bollywood", context: "Movie: Dilwale Dulhania Le Jayenge | Cast: Kajol" },
    { title: "Ho Gaya Hai Tujhko To Pyar", type: "Song", industry: "Bollywood", context: "Movie: Dilwale Dulhania Le Jayenge | Cast: Shah Rukh Khan, Kajol" },
    { title: "Saajanji Ghar Aaye", type: "Song", industry: "Bollywood", context: "Movie: Kuch Kuch Hota Hai | Cast: Salman Khan, Kajol" },
    { title: "Nimbooda Nimbooda", type: "Song", industry: "Bollywood", context: "Movie: Hum Dil De Chuke Sanam | Cast: Aishwarya Rai" },
    { title: "Doli Taro Dhol Baje", type: "Song", industry: "Bollywood", context: "Movie: Hum Dil De Chuke Sanam | Cast: Salman Khan, Aishwarya Rai" },
    { title: "Chand Chupa Badal Mein", type: "Song", industry: "Bollywood", context: "Movie: Hum Dil De Chuke Sanam | Cast: Salman Khan, Aishwarya Rai" },
    { title: "Apun Bola Tu Meri Laila", type: "Song", industry: "Bollywood", context: "Movie: Josh | Cast: Shah Rukh Khan, Aishwarya Rai" },
    { title: "M Bole To", type: "Song", industry: "Bollywood", context: "Movie: Munna Bhai M.B.B.S. | Cast: Sanjay Dutt" },
    { title: "Na Tum Jano Na Hum", type: "Song", industry: "Bollywood", context: "Movie: Kaho Naa... Pyaar Hai | Cast: Hrithik Roshan, Ameesha Patel" },
    { title: "Yeh Ladka Hai Allah", type: "Song", industry: "Bollywood", context: "Movie: Kabhi Khushi Kabhie Gham | Cast: Shah Rukh Khan, Kajol" },
    { title: "Mahi Ve", type: "Song", industry: "Bollywood", context: "Movie: Kal Ho Naa Ho | Cast: Preity Zinta, Shah Rukh Khan, Saif Ali Khan" },
    { title: "It's The Time To Disco", type: "Song", industry: "Bollywood", context: "Movie: Kal Ho Naa Ho | Cast: Preity Zinta, Shah Rukh Khan, Saif Ali Khan" },
    { title: "Kal Ho Naa Ho (Title)", type: "Song", industry: "Bollywood", context: "Movie: Kal Ho Naa Ho | Cast: Shah Rukh Khan" },
    { title: "Pretty Woman", type: "Song", industry: "Bollywood", context: "Movie: Kal Ho Naa Ho | Cast: Shah Rukh Khan, Preity Zinta" },
    { title: "Idhar Chala Main Udhar Chala", type: "Song", industry: "Bollywood", context: "Movie: Koi... Mil Gaya | Cast: Hrithik Roshan, Preity Zinta" },
    { title: "Jaadoo Jaadoo", type: "Song", industry: "Bollywood", context: "Movie: Koi... Mil Gaya | Cast: Hrithik Roshan, Preity Zinta" },
    { title: "Main Hoon Na", type: "Song", industry: "Bollywood", context: "Movie: Main Hoon Na | Cast: Shah Rukh Khan, Sushmita Sen" },
    { title: "Tumse Milke Dilka Jo Haal", type: "Song", industry: "Bollywood", context: "Movie: Main Hoon Na | Cast: Shah Rukh Khan, Sushmita Sen" },
    { title: "Gori Gori", type: "Song", industry: "Bollywood", context: "Movie: Main Hoon Na | Cast: Shah Rukh Khan, Sushmita Sen" },
    { title: "Chale Jaise Hawayein", type: "Song", industry: "Bollywood", context: "Movie: Main Hoon Na | Cast: Amrita Rao, Zayed Khan" },
    { title: "Dilbara", type: "Song", industry: "Bollywood", context: "Movie: Dhoom | Cast: Abhishek Bachchan, Uday Chopra" },
    { title: "Nach Baliye", type: "Song", industry: "Bollywood", context: "Movie: Bunty Aur Babli | Cast: Abhishek Bachchan, Rani Mukerji" },
    { title: "Namak Ishq Ka", type: "Song", industry: "Bollywood", context: "Movie: Omkara | Cast: Bipasha Basu" },
    { title: "Bol Na Halke Halke", type: "Song", industry: "Bollywood", context: "Movie: Jhoom Barabar Jhoom | Cast: Abhishek Bachchan, Preity Zinta" },
    { title: "Chak De India", type: "Song", industry: "Bollywood", context: "Movie: Chak De! India | Cast: Shah Rukh Khan" },
    { title: "Tum Se Hi", type: "Song", industry: "Bollywood", context: "Movie: Jab We Met | Cast: Shahid Kapoor, Kareena Kapoor" },
    { title: "Yeh Ishq Hai", type: "Song", industry: "Bollywood", context: "Movie: Jab We Met | Cast: Kareena Kapoor" },
    { title: "Dulha kisne Banaya Bhootni Ke", type: "Song", industry: "Bollywood", context: "Movie: Singh Is Kinng | Cast: Akshay Kumar" },
    { title: "Second Hand Jawani", type: "Song", industry: "Bollywood", context: "Movie: Cocktail | Cast: Saif Ali Khan, Deepika Padukone, Diana Penty" },
    { title: "Jee Karda", type: "Song", industry: "Bollywood", context: "Movie: Badlapur | Cast: Varun Dhawan" },
    { title: "Maa Da Laadla", type: "Song", industry: "Bollywood", context: "Movie: Dostana | Cast: Abhishek Bachchan, John Abraham" },
    { title: "Shut Up & Bounce", type: "Song", industry: "Bollywood", context: "Movie: Dostana | Cast: John Abraham, Abhishek Bachchan, Shilpa Shetty" },
    { title: "Haule Haule", type: "Song", industry: "Bollywood", context: "Movie: Rab Ne Bana Di Jodi | Cast: Shah Rukh Khan" },
    { title: "Dance Pe Chance", type: "Song", industry: "Bollywood", context: "Movie: Rab Ne Bana Di Jodi | Cast: Shah Rukh Khan, Anushka Sharma" },
    { title: "Tujh Mein Rab Dikhta Hai", type: "Song", industry: "Bollywood", context: "Movie: Rab Ne Bana Di Jodi | Cast: Shah Rukh Khan, Anushka Sharma" },
    { title: "Genda Phool (Delhi 6)", type: "Song", industry: "Bollywood", context: "Movie: Delhi-6 | Cast: Sonam Kapoor" },
    { title: "Emosanal Attyachaar", type: "Song", industry: "Bollywood", context: "Movie: Dev.D | Cast: Abhay Deol" },
    { title: "Gal Mitthi Mitthi", type: "Song", industry: "Bollywood", context: "Movie: Aisha | Cast: Abhay Deol, Sonam Kapoor" },
    { title: "Ainvayi Ainvayi", type: "Song", industry: "Bollywood", context: "Movie: Band Baaja Baaraat | Cast: Ranveer Singh, Anushka Sharma" },
    { title: "Dum Maaro Dum", type: "Song", industry: "Bollywood", context: "Movie: Dum Maaro Dum | Cast: Deepika Padukone" },
    { title: "Character Dheela", type: "Song", industry: "Bollywood", context: "Movie: Ready | Cast: Salman Khan, Zarine Khan" },
    { title: "Sadi Gali", type: "Song", industry: "Bollywood", context: "Movie: Tanu Weds Manu | Cast: Kangana Ranaut, R. Madhavan" },
    { title: "Anarkali Disco Chali", type: "Song", industry: "Bollywood", context: "Movie: Housefull 2 | Cast: Malaika Arora, Akshay Kumar" },
    { title: "Pungi", type: "Song", industry: "Bollywood", context: "Movie: Agent Vinod | Cast: Saif Ali Khan" },
    { title: "Daaru Desi", type: "Song", industry: "Bollywood", context: "Movie: Cocktail | Cast: Deepika Padukone, Diana Penty, Saif Ali Khan" },
    { title: "Kukkad", type: "Song", industry: "Bollywood", context: "Movie: Student of the Year | Cast: Varun Dhawan, Sidharth Malhotra" },
    { title: "Balma", type: "Song", industry: "Bollywood", context: "Movie: Khiladi 786 | Cast: Akshay Kumar, Asin" },
    { title: "Tu Mere Agal Bagal Hai", type: "Song", industry: "Bollywood", context: "Movie: Phata Poster Nikhla Hero | Cast: Shahid Kapoor" },
    { title: "Malang", type: "Song", industry: "Bollywood", context: "Movie: Dhoom 3 | Cast: Aamir Khan, Katrina Kaif" },
    { title: "Kamli", type: "Song", industry: "Bollywood", context: "Movie: Dhoom 3 | Cast: Katrina Kaif" },
    { title: "Party All Night", type: "Song", industry: "Bollywood", context: "Movie: Boss | Cast: Akshay Kumar" },
    { title: "Samjhawan", type: "Song", industry: "Bollywood", context: "Movie: Humpty Sharma Ki Dulhania | Cast: Varun Dhawan, Alia Bhatt" },
    { title: "Engine Ki Seeti", type: "Song", industry: "Bollywood", context: "Movie: Khoobsurat | Cast: Sonam Kapoor" },
    { title: "Bang Bang", type: "Song", industry: "Bollywood", context: "Movie: Bang Bang! | Cast: Hrithik Roshan, Katrina Kaif" },
    { title: "Tu Meri", type: "Song", industry: "Bollywood", context: "Movie: Bang Bang! | Cast: Hrithik Roshan, Katrina Kaif" },
    { title: "India Waale", type: "Song", industry: "Bollywood", context: "Movie: Happy New Year | Cast: Shah Rukh Khan, Deepika, Abhishek" },
    { title: "Lovely", type: "Song", industry: "Bollywood", context: "Movie: Happy New Year | Cast: Deepika Padukone" },
    { title: "Superman", type: "Song", industry: "Bollywood", context: "Movie: Tevar | Cast: Arjun Kapoor" },
    { title: "Desi Look", type: "Song", industry: "Bollywood", context: "Movie: Ek Paheli Leela | Cast: Sunny Leone" },
    { title: "Banno", type: "Song", industry: "Bollywood", context: "Movie: Tanu Weds Manu Returns | Cast: Kangana Ranaut" },
    { title: "Makhna", type: "Song", industry: "Bollywood", context: "Movie: Drive | Cast: Sushant Singh Rajput, Jacqueline Fernandez" },
    { title: "Tung Tung Baje", type: "Song", industry: "Bollywood", context: "Movie: Singh Is Bliing | Cast: Akshay Kumar" },
    { title: "Gulaabo", type: "Song", industry: "Bollywood", context: "Movie: Shaandaar | Cast: Shahid Kapoor, Alia Bhatt" },
    { title: "Gerua", type: "Song", industry: "Bollywood", context: "Movie: Dilwale | Cast: Shah Rukh Khan, Kajol" },
    { title: "Let's Nacho", type: "Song", industry: "Bollywood", context: "Movie: Kapoor & Sons | Cast: Sidharth Malhotra, Alia Bhatt, Fawad Khan" },
    { title: "Chitta Ve", type: "Song", industry: "Bollywood", context: "Movie: Udta Punjab | Cast: Shahid Kapoor" },
    { title: "Udta Punjab", type: "Song", industry: "Bollywood", context: "Movie: Udta Punjab | Cast: Shahid Kapoor" },
    { title: "Baby Ko Bass Pasand Hai", type: "Song", industry: "Bollywood", context: "Movie: Sultan | Cast: Salman Khan, Anushka Sharma" },
    { title: "440 Volt", type: "Song", industry: "Bollywood", context: "Movie: Sultan | Cast: Salman Khan" },
    { title: "Sau Aasmaan", type: "Song", industry: "Bollywood", context: "Movie: Baar Baar Dekho | Cast: Katrina Kaif, Sidharth Malhotra" },
    { title: "Ae Dil Hai Mushkil", type: "Song", industry: "Bollywood", context: "Movie: Ae Dil Hai Mushkil | Cast: Ranbir Kapoor" },
    { title: "Cutiepie", type: "Song", industry: "Bollywood", context: "Movie: Ae Dil Hai Mushkil | Cast: Ranbir Kapoor, Anushka Sharma" },
    { title: "Dangal", type: "Song", industry: "Bollywood", context: "Movie: Dangal | Cast: Aamir Khan" },
    { title: "Humma Humma", type: "Song", industry: "Bollywood", context: "Movie: OK Jaanu | Cast: Aditya Roy Kapur, Shraddha Kapoor" },
    { title: "Laila Main Laila", type: "Song", industry: "Bollywood", context: "Movie: Raees | Cast: Sunny Leone, Shah Rukh Khan" },
    { title: "Zaalima", type: "Song", industry: "Bollywood", context: "Movie: Raees | Cast: Shah Rukh Khan, Mahira Khan" },
    { title: "Tamma Tamma Again", type: "Song", industry: "Bollywood", context: "Movie: Badrinath Ki Dulhania | Cast: Varun Dhawan, Alia Bhatt" },
    { title: "Badri Ki Dulhania", type: "Song", industry: "Bollywood", context: "Movie: Badrinath Ki Dulhania | Cast: Varun Dhawan, Alia Bhatt" },
    { title: "Cheez Badi", type: "Song", industry: "Bollywood", context: "Movie: Machine | Cast: Mustafa Burmawalla, Kiara Advani" },
    { title: "Main Tera Boyfriend", type: "Song", industry: "Bollywood", context: "Movie: Raabta | Cast: Sushant Singh Rajput, Kriti Sanon" },
    { title: "Radio", type: "Song", industry: "Bollywood", context: "Movie: Tubelight | Cast: Salman Khan" },
    { title: "Galti Se Mistake", type: "Song", industry: "Bollywood", context: "Movie: Jagga Jasoos | Cast: Ranbir Kapoor" },
    { title: "Mere Rashke Qamar", type: "Song", industry: "Bollywood", context: "Movie: Baadshaho | Cast: Ajay Devgn, Ileana D'Cruz" },
    { title: "Hawa Hawa", type: "Song", industry: "Bollywood", context: "Movie: Mubarakan | Cast: Arjun Kapoor, Ileana D'Cruz" },
    { title: "Lagdi Hai Thaai", type: "Song", industry: "Bollywood", context: "Movie: Simran | Cast: Kangana Ranaut" },
    { title: "Chalti Hai Kya 9 Se 12", type: "Song", industry: "Bollywood", context: "Movie: Judwaa 2 | Cast: Varun Dhawan, Jacqueline, Taapsee" },
    { title: "Oonchi Hai Building", type: "Song", industry: "Bollywood", context: "Movie: Judwaa 2 | Cast: Varun Dhawan, Jacqueline, Taapsee" },
    { title: "Dil Diyan Gallan", type: "Song", industry: "Bollywood", context: "Movie: Tiger Zinda Hai | Cast: Salman Khan, Katrina Kaif" },
    { title: "Khalibali", type: "Song", industry: "Bollywood", context: "Movie: Padmaavat | Cast: Ranveer Singh" },
    { title: "Kamariya", type: "Song", industry: "Bollywood", context: "Movie: Stree | Cast: Nora Fatehi, Rajkummar Rao" },
    { title: "First Class", type: "Song", industry: "Bollywood", context: "Movie: Kalank | Cast: Varun Dhawan, Kiara Advani" },
    { title: "Psycho Saiyaan", type: "Song", industry: "Bollywood", context: "Movie: Saaho | Cast: Prabhas, Shraddha Kapoor" },
    { title: "Jai Jai Shivshankar", type: "Song", industry: "Bollywood", context: "Movie: War | Cast: Hrithik Roshan, Tiger Shroff" },
    { title: "Sauda Khara Khara", type: "Song", industry: "Bollywood", context: "Movie: Good Newwz | Cast: Akshay Kumar, Kareena, Diljit, Kiara" },
    { title: "Genda Phool (Badshah)", type: "Song", industry: "Bollywood", context: "Artist: Badshah | Cast: Badshah, Jacqueline Fernandez" },
    { title: "Show Me The Thumka", type: "Song", industry: "Bollywood", context: "Movie: Tu Jhoothi Main Makkaar | Cast: Ranbir Kapoor, Shraddha Kapoor" },
    { title: "What Jhumka", type: "Song", industry: "Bollywood", context: "Movie: Rocky Aur Rani Kii Prem Kahaani | Cast: Ranveer Singh, Alia Bhatt" },
    { title: "Aayi Nai", type: "Song", industry: "Bollywood", context: "Movie: Stree 2 | Cast: Rajkummar Rao, Shraddha Kapoor" },
    { title: "Soni De Nakhre", type: "Song", industry: "Bollywood", context: "Movie: Partner | Cast: Salman Khan, Govinda, Katrina Kaif" },
    { title: "Navrai Majhi", type: "Song", industry: "Bollywood", context: "Movie: English Vinglish | Cast: Sridevi" },
    { title: "Senorita", type: "Song", industry: "Bollywood", context: "Movie: Zindagi Na Milegi Dobara | Cast: Hrithik, Farhan, Abhay" },
    { title: "Desi Boyz", type: "Song", industry: "Bollywood", context: "Movie: Desi Boyz | Cast: Akshay Kumar, John Abraham" },
    { title: "Subha Hone Na De", type: "Song", industry: "Bollywood", context: "Movie: Desi Boyz | Cast: Akshay Kumar, John Abraham" },
    { title: "Right Here Right Now", type: "Song", industry: "Bollywood", context: "Movie: Bluffmaster! | Cast: Abhishek Bachchan, Priyanka Chopra" },
    { title: "Twist", type: "Song", industry: "Bollywood", context: "Movie: Love Aaj Kal | Cast: Saif Ali Khan" },
    { title: "Aahun Aahun", type: "Song", industry: "Bollywood", context: "Movie: Love Aaj Kal | Cast: Saif Ali Khan, Deepika Padukone" },
    { title: "Mauja Hi Mauja", type: "Song", industry: "Bollywood", context: "Movie: Jab We Met | Cast: Shahid Kapoor, Kareena Kapoor" },
    { title: "Nagada Sang Dhol", type: "Song", industry: "Bollywood", context: "Movie: Ram-Leela | Cast: Deepika Padukone, Ranveer Singh" },
    { title: "Ainvayi Ainvayi", type: "Song", industry: "Bollywood", context: "Movie: Band Baaja Baaraat | Cast: Ranveer Singh, Anushka Sharma" },
    { title: "Baari Barsi", type: "Song", industry: "Bollywood", context: "Movie: Band Baaja Baaraat | Cast: Ranveer Singh, Anushka Sharma" },
    { title: "Laung Da Lashkara", type: "Song", industry: "Bollywood", context: "Movie: Patiala House | Cast: Akshay Kumar, Anushka Sharma" },
    { title: "Sadi Gali", type: "Song", industry: "Bollywood", context: "Movie: Tanu Weds Manu | Cast: Kangana Ranaut, R. Madhavan" },
    { title: "Rum & Whisky", type: "Song", industry: "Bollywood", context: "Movie: Vicky Donor | Cast: Ayushmann Khurrana" },
    { title: "Radha", type: "Song", industry: "Bollywood", context: "Movie: Student of the Year | Cast: Alia Bhatt, Varun, Sidharth" },
    { title: "Disco Deewane", type: "Song", industry: "Bollywood", context: "Movie: Student of the Year | Cast: Alia Bhatt, Varun, Sidharth" },
    { title: "Ishq Wala Love", type: "Song", industry: "Bollywood", context: "Movie: Student of the Year | Cast: Alia Bhatt, Varun, Sidharth" },
    { title: "Vele", type: "Song", industry: "Bollywood", context: "Movie: Student of the Year | Cast: Varun Dhawan, Sidharth Malhotra" },
    { title: "Lat Lag Gayee", type: "Song", industry: "Bollywood", context: "Movie: Race 2 | Cast: Jacqueline Fernandez, Saif Ali Khan" },
    { title: "Party On My Mind", type: "Song", industry: "Bollywood", context: "Movie: Race 2 | Cast: Saif, Deepika, John, Jacqueline" },
    { title: "Dilliwaali Girlfriend", type: "Song", industry: "Bollywood", context: "Movie: Yeh Jawaani Hai Deewani | Cast: Ranbir Kapoor, Deepika Padukone" },
    { title: "Ghagra", type: "Song", industry: "Bollywood", context: "Movie: Yeh Jawaani Hai Deewani | Cast: Madhuri Dixit, Ranbir Kapoor" },
    { title: "Chingam Chabake", type: "Song", industry: "Bollywood", context: "Movie: Gori Tere Pyaar Mein | Cast: Kareena Kapoor, Imran Khan" },
    { title: "Tooh", type: "Song", industry: "Bollywood", context: "Movie: Gori Tere Pyaar Mein | Cast: Kareena Kapoor, Imran Khan" },
    { title: "Tune Maari Entriyaan", type: "Song", industry: "Bollywood", context: "Movie: Gunday | Cast: Arjun Kapoor, Ranveer Singh, Priyanka Chopra" },
    { title: "Asalaam-e-Ishqum", type: "Song", industry: "Bollywood", context: "Movie: Gunday | Cast: Priyanka Chopra, Ranveer, Arjun" },
    { title: "Drama Queen", type: "Song", industry: "Bollywood", context: "Movie: Hasee Toh Phasee | Cast: Sidharth Malhotra, Parineeti Chopra" },
    { title: "Iski Uski", type: "Song", industry: "Bollywood", context: "Movie: 2 States | Cast: Arjun Kapoor, Alia Bhatt" },
    { title: "Locha-E-Ulfat", type: "Song", industry: "Bollywood", context: "Movie: 2 States | Cast: Arjun Kapoor, Alia Bhatt" },
    { title: "Mast Magan", type: "Song", industry: "Bollywood", context: "Movie: 2 States | Cast: Arjun Kapoor, Alia Bhatt" },
    { title: "Offo", type: "Song", industry: "Bollywood", context: "Movie: 2 States | Cast: Arjun Kapoor, Alia Bhatt" },
    { title: "Gallan Goodiyaan", type: "Song", industry: "Bollywood", context: "Movie: Dil Dhadakne Do | Cast: Anil Kapoor, Shefali Shah, Ranveer, Priyanka" },
    { title: "Sooraj Dooba Hain", type: "Song", industry: "Bollywood", context: "Movie: Roy | Cast: Ranbir Kapoor, Jacqueline Fernandez" },
    { title: "Matargashti", type: "Song", industry: "Bollywood", context: "Movie: Tamasha | Cast: Ranbir Kapoor, Deepika Padukone" },
    { title: "High Heels", type: "Song", industry: "Bollywood", context: "Movie: Ki & Ka | Cast: Arjun Kapoor, Kareena Kapoor" },
    { title: "Let's Nacho", type: "Song", industry: "Bollywood", context: "Movie: Kapoor & Sons | Cast: Sidharth Malhotra, Alia Bhatt, Fawad Khan" },
    { title: "Nachde Ne Saare", type: "Song", industry: "Bollywood", context: "Movie: Baar Baar Dekho | Cast: Katrina Kaif, Sidharth Malhotra" },
    { title: "Sau Aasmaan", type: "Song", industry: "Bollywood", context: "Movie: Baar Baar Dekho | Cast: Katrina Kaif, Sidharth Malhotra" },
    { title: "Ude Dil Befikre", type: "Song", industry: "Bollywood", context: "Movie: Befikre | Cast: Ranveer Singh, Vaani Kapoor" },
    { title: "The Humma Song", type: "Song", industry: "Bollywood", context: "Movie: OK Jaanu | Cast: Aditya Roy Kapur, Shraddha Kapoor" },
    { title: "Enna Sona", type: "Song", industry: "Bollywood", context: "Movie: OK Jaanu | Cast: Aditya Roy Kapur, Shraddha Kapoor" },
    { title: "Humsafar", type: "Song", industry: "Bollywood", context: "Movie: Badrinath Ki Dulhania | Cast: Varun Dhawan, Alia Bhatt" },
    { title: "Main Tera Boyfriend", type: "Song", industry: "Bollywood", context: "Movie: Raabta | Cast: Sushant Singh Rajput, Kriti Sanon" },
    { title: "Sweety Tera Drama", type: "Song", industry: "Bollywood", context: "Movie: Bareilly Ki Barfi | Cast: Ayushmann Khurrana, Kriti Sanon" },
    { title: "Hawa Hawa", type: "Song", industry: "Bollywood", context: "Movie: Mubarakan | Cast: Arjun Kapoor, Ileana D'Cruz" },
    { title: "Dil Diyan Gallan", type: "Song", industry: "Bollywood", context: "Movie: Tiger Zinda Hai | Cast: Salman Khan, Katrina Kaif" },
    { title: "Swag Se Swagat", type: "Song", industry: "Bollywood", context: "Movie: Tiger Zinda Hai | Cast: Salman Khan, Katrina Kaif" },
    { title: "Khalibali", type: "Song", industry: "Bollywood", context: "Movie: Padmaavat | Cast: Ranveer Singh" },
    { title: "Kamariya", type: "Song", industry: "Bollywood", context: "Movie: Stree | Cast: Nora Fatehi, Rajkummar Rao" },
    { title: "Zingaat", type: "Song", industry: "Bollywood", context: "Movie: Dhadak | Cast: Ishaan Khatter, Janhvi Kapoor" },
    { title: "Gud Naal Ishq Mitha", type: "Song", industry: "Bollywood", context: "Movie: Ek Ladki Ko Dekha Toh Aisa Laga | Cast: Sonam Kapoor, Anil Kapoor, Rajkummar Rao" },
    { title: "Photo", type: "Song", industry: "Bollywood", context: "Movie: Luka Chuppi | Cast: Kartik Aaryan, Kriti Sanon" },
    { title: "Duniyaa", type: "Song", industry: "Bollywood", context: "Movie: Luka Chuppi | Cast: Kartik Aaryan, Kriti Sanon" },
    { title: "Ve Maahi", type: "Song", industry: "Bollywood", context: "Movie: Kesari | Cast: Akshay Kumar, Parineeti Chopra" },
    { title: "The Jawaani Song", type: "Song", industry: "Bollywood", context: "Movie: Student of the Year 2 | Cast: Tiger Shroff, Ananya Panday, Tara Sutaria" },
    { title: "Hauli Hauli", type: "Song", industry: "Bollywood", context: "Movie: De De Pyaar De | Cast: Ajay Devgn, Rakul Preet Singh" },
    { title: "Shaitan Ka Saala", type: "Song", industry: "Bollywood", context: "Movie: Housefull 4 | Cast: Akshay Kumar" },
    { title: "Sauda Khara Khara", type: "Song", industry: "Bollywood", context: "Movie: Good Newwz | Cast: Akshay Kumar, Kareena, Diljit, Kiara" },
    { title: "Chandigarh Mein", type: "Song", industry: "Bollywood", context: "Movie: Good Newwz | Cast: Akshay, Kareena, Diljit, Kiara" },
    { title: "Haan Main Galat", type: "Song", industry: "Bollywood", context: "Movie: Love Aaj Kal | Cast: Kartik Aaryan, Sara Ali Khan" },
    { title: "Dus Bahane", type: "Song", industry: "Bollywood", context: "Movie: Baaghi 3 | Cast: Tiger Shroff, Shraddha Kapoor" },
    { title: "Nadiyon Paar", type: "Song", industry: "Bollywood", context: "Movie: Roohi | Cast: Janhvi Kapoor" },
    { title: "Raataan Lambiyan", type: "Song", industry: "Bollywood", context: "Movie: Shershaah | Cast: Sidharth Malhotra, Kiara Advani" },
    { title: "Jugnu", type: "Song", industry: "Bollywood", context: "Artist: Badshah | Cast: Badshah, Akanksha Sharma" },
    { title: "Coka 2.0", type: "Song", industry: "Bollywood", context: "Movie: Liger | Cast: Vijay Deverakonda, Ananya Panday" },
    { title: "Bhool Bhulaiyaa 2 Title", type: "Song", industry: "Bollywood", context: "Movie: Bhool Bhulaiyaa 2 | Cast: Kartik Aaryan" },
    { title: "Rangisari", type: "Song", industry: "Bollywood", context: "Movie: JugJugg Jeeyo | Cast: Varun Dhawan, Kiara Advani" },
    { title: "Nach Punjaban", type: "Song", industry: "Bollywood", context: "Movie: JugJugg Jeeyo | Cast: Varun, Kiara, Anil, Neetu" },
    { title: "Dance Ka Bhoot", type: "Song", industry: "Bollywood", context: "Movie: Brahmastra | Cast: Ranbir Kapoor" },
    { title: "Manike", type: "Song", industry: "Bollywood", context: "Movie: Thank God | Cast: Nora Fatehi, Sidharth Malhotra" },
    { title: "Thumkeshwari", type: "Song", industry: "Bollywood", context: "Movie: Bhediya | Cast: Varun Dhawan, Kriti Sanon" },
    { title: "Jedha Nasha", type: "Song", industry: "Bollywood", context: "Movie: An Action Hero | Cast: Ayushmann Khurrana, Nora Fatehi" },
    { title: "Jungle Mein Kaand", type: "Song", industry: "Bollywood", context: "Movie: Bhediya | Cast: Varun Dhawan, Kriti Sanon" },
    { title: "Show Me The Thumka", type: "Song", industry: "Bollywood", context: "Movie: Tu Jhoothi Main Makkaar | Cast: Ranbir Kapoor, Shraddha Kapoor" },
    { title: "Tum Kya Mile", type: "Song", industry: "Bollywood", context: "Movie: Rocky Aur Rani Kii Prem Kahaani | Cast: Ranveer Singh, Alia Bhatt" },
    { title: "What Jhumka", type: "Song", industry: "Bollywood", context: "Movie: Rocky Aur Rani Kii Prem Kahaani | Cast: Ranveer Singh, Alia Bhatt" },
    { title: "Kudmayi", type: "Song", industry: "Bollywood", context: "Movie: Rocky Aur Rani Kii Prem Kahaani | Cast: Ranveer Singh, Alia Bhatt" },
    { title: "Heart Throb", type: "Song", industry: "Bollywood", context: "Movie: Rocky Aur Rani Kii Prem Kahaani | Cast: Ranveer Singh" },
    { title: "Lutt Putt Gaya", type: "Song", industry: "Bollywood", context: "Movie: Dunki | Cast: Shah Rukh Khan, Taapsee Pannu" },
    { title: "Sher Khul Gaye", type: "Song", industry: "Bollywood", context: "Movie: Fighter | Cast: Hrithik Roshan, Deepika Padukone" },
    { title: "Ishq Jaisa Kuch", type: "Song", industry: "Bollywood", context: "Movie: Fighter | Cast: Hrithik Roshan, Deepika Padukone" },
    { title: "Pehle Bhi Main", type: "Song", industry: "Bollywood", context: "Movie: Animal | Cast: Ranbir Kapoor, Triptii Dimri" },
    { title: "Akhiyaan Gulaab", type: "Song", industry: "Bollywood", context: "Movie: Teri Baaton Mein Aisa Uljha Jiya | Cast: Shahid Kapoor, Kriti Sanon" },
    { title: "Arjan Vailly", type: "Song", industry: "Bollywood", context: "Movie: Animal | Cast: Ranbir Kapoor" },
    { title: "Badtameez Dil", type: "Song", industry: "Bollywood", context: "Movie: Yeh Jawaani Hai Deewani | Cast: Ranbir Kapoor, Deepika Padukone" },
    { title: "Dilli 6", type: "Song", industry: "Bollywood", context: "Movie: Delhi-6 | Cast: Abhishek Bachchan, Sonam Kapoor" },
    { title: "Maahi Ve", type: "Song", industry: "Bollywood", context: "Movie: Kal Ho Naa Ho | Cast: Preity Zinta, Shah Rukh Khan, Saif Ali Khan" },
    { title: "Dupatta Tera Nau Rang Da", type: "Song", industry: "Bollywood", context: "Movie: Partner | Cast: Salman Khan, Govinda, Katrina, Lara" },
    { title: "Just Chill", type: "Song", industry: "Bollywood", context: "Movie: Maine Pyaar Kyun Kiya? | Cast: Salman Khan, Katrina Kaif" },
    { title: "Dil Dooba", type: "Song", industry: "Bollywood", context: "Movie: Khakee | Cast: Akshay Kumar, Aishwarya Rai" },
    { title: "Beedi", type: "Song", industry: "Bollywood", context: "Movie: Omkara | Cast: Bipasha Basu, Ajay Devgn, Saif Ali Khan" },
    { title: "Dhoom Again", type: "Song", industry: "Bollywood", context: "Movie: Dhoom 2 | Cast: Hrithik Roshan, Aishwarya Rai" },
    { title: "Character Dheela", type: "Song", industry: "Bollywood", context: "Movie: Ready | Cast: Salman Khan, Zarine Khan" },
    { title: "Sunny Sunny", type: "Song", industry: "Bollywood", context: "Movie: Yaariyan | Cast: Himansh Kohli, Rakul Preet Singh" },
    { title: "Abhi Toh Party Shuru Hui Hai", type: "Song", industry: "Bollywood", context: "Movie: Khoobsurat | Cast: Sonam Kapoor, Fawad Khan" },
    { title: "Kar Gayi Chull", type: "Song", industry: "Bollywood", context: "Movie: Kapoor & Sons | Cast: Sidharth Malhotra, Alia Bhatt" },
    { title: "Nashe Si Chadh Gayi", type: "Song", industry: "Bollywood", context: "Movie: Befikre | Cast: Ranveer Singh, Vaani Kapoor" },
    { title: "Dil Chori", type: "Song", industry: "Bollywood", context: "Movie: Sonu Ke Titu Ki Sweety | Cast: Kartik Aaryan, Nushrratt Bharuccha" },
    { title: "Illegal Weapon", type: "Song", industry: "Bollywood", context: "Movie: Street Dancer 3D | Cast: Varun Dhawan, Shraddha Kapoor" },
    { title: "Garmi", type: "Song", industry: "Bollywood", context: "Movie: Street Dancer 3D | Cast: Varun Dhawan, Nora Fatehi" },
    { title: "Tera Hone Laga Hoon", type: "Song", industry: "Bollywood", context: "Movie: Ajab Prem Ki Ghazab Kahani | Cast: Ranbir Kapoor, Katrina Kaif" },
    { title: "Pee Loon", type: "Song", industry: "Bollywood", context: "Movie: Once Upon a Time in Mumbaai | Cast: Emraan Hashmi, Prachi Desai" },
    { title: "Tum Jo Aaye", type: "Song", industry: "Bollywood", context: "Movie: Once Upon a Time in Mumbaai | Cast: Ajay Devgn, Kangana Ranaut" },
    { title: "Mere Brother Ki Dulhan", type: "Song", industry: "Bollywood", context: "Movie: Mere Brother Ki Dulhan | Cast: Imran Khan, Katrina Kaif" },
    { title: "Dhating Naach", type: "Song", industry: "Bollywood", context: "Movie: Phata Poster Nikhla Hero | Cast: Shahid Kapoor, Nargis Fakhri" },
    { title: "Saree Ke Fall Sa", type: "Song", industry: "Bollywood", context: "Movie: R... Rajkumar | Cast: Shahid Kapoor, Sonakshi Sinha" },
    { title: "Mast Kalandar", type: "Song", industry: "Bollywood", context: "Movie: Heyy Babyy | Cast: Akshay Kumar, Fardeen Khan, Riteish Deshmukh" },
    { title: "Tenu Le Ke Mein Jawaga", type: "Song", industry: "Bollywood", context: "Movie: Salaam-E-Ishq | Cast: Salman Khan, Priyanka Chopra" },
    { title: "Gallan Goodiyaan (Dil Dhadakne Do)", type: "Song", industry: "Bollywood", context: "Movie: Dil Dhadakne Do | Cast: Anil, Shefali, Ranveer, Priyanka" },
    { title: "Aankhein Khuli", type: "Song", industry: "Bollywood", context: "Movie: Mohabbatein | Cast: Shah Rukh Khan, Aishwarya Rai" },
    { title: "Mehbooba Mehbooba", type: "Song", industry: "Bollywood", context: "Movie: Sholay / Ajnabee | Cast: Amitabh, Akshay Kumar, Bipasha" },
    { title: "Tareef Karoon Kya Uski", type: "Song", industry: "Bollywood", context: "Movie: Kashmir Ki Kali | Cast: Shammi Kapoor, Sharmila Tagore" },
    { title: "Salaam-E-Ishq", type: "Song", industry: "Bollywood", context: "Movie: Salaam-E-Ishq | Cast: Salman Khan, Priyanka Chopra" },
    { title: "Raanjhanaa", type: "Song", industry: "Bollywood", context: "Movie: Raanjhanaa | Cast: Dhanush, Sonam Kapoor" },
    { title: "Dil Na Diya", type: "Song", industry: "Bollywood", context: "Movie: Krrish | Cast: Hrithik Roshan, Priyanka Chopra" },
    {title: " Tunak Tunak", type: "Song", industry: "Bollywood", context: "Singer: Tunak Tunak | Cast: Daler Mehndi"},
    {title:" Bolo Tara Rara", type: "Song", industry: "Bollywood", context: "Singer: Bolo Tara Rara | Cast: Daler Mehndi"}, 
    {title:"Zor Ka Jhatka", type: "Song", industry: "Bollywood", context: "Singer: Action Replay | Cast: Akhshay Kumar, Aishwarya Rai"},
    {title: "Aja Nachle", type: "Song", industry: "Bollywood", context: "Movie: Aja Nachle | Cast: Madhuri Dixit"},
    {title: "Madhu Bala", type: "Song", industry: "Bollywood", context: "Movie: Mere Brother Ki Dulhan | Cast: Katrina Kaif, Imran Khan"},
    {title: "Afghan Jalebi", type: "Song", industry: "Bollywood", context: "Movie: Phantom | Cast: Katrina Kaif, Saif Ali Khan "},
    {title: "Jalebi Bai", type: "Song", industry: "Bollywood", context: "Movie: Double Dhamal | Cast: Sanjay Dutt, Arshad Warsi"},
    {title: "Criminal", type: "Song", industry: "Bollywood", context: "Movie: Ra One | Cast: Karina Kapoor, Shah Rukh Khan"},

    


    // --- BANGLA SONGS ---
    { title: "Pore Na Chokher Polok", type: "Song", industry: "Bangla", context: "Artist: Andrew Kishore | Cast: Andrew Kishore" },
    { title: "Amar Gorur Garite", type: "Song", industry: "Bangla", context: "Movie: Agun | Cast: Alamgir, Shabana" },
    { title: "O Amar Bondhu Go", type: "Song", industry: "Bangla", context: "Movie: Keyamat Theke Keyamat | Cast: Salman Shah, Moushumi" },
    { title: "Ammajan", type: "Song", industry: "Bangla", context: "Movie: Ammajan | Cast: Manna" },
    { title: "Premer Shomadi Bhenge", type: "Song", industry: "Bangla", context: "Movie: Pagol Mon | Cast: Bappa Raj" },
    { title: "Neela", type: "Song", industry: "Bangla", context: "Artist: Miles | Lead: Shafin Ahmed" },
    { title: "Firiye Dao", type: "Song", industry: "Bangla", context: "Artist: Miles | Lead: Shafin Ahmed" },
    { title: "Beder Meye Josna", type: "Song", industry: "Bangla", context: "Movie: Beder Meye Josna | Cast: Ilias Kanchan, Anju Ghosh" },
    { title: "Khairun Lo", type: "Song", industry: "Bangla", context: "Artist: Momtaz" },
    { title: "Nantu Ghotok", type: "Song", industry: "Bangla", context: "Artist: Momtaz" },
    { title: "Bondhu Tin Din", type: "Song", industry: "Bangla", context: "Movie: Sujon Sokhi | Cast: Salman Shah, Shabnur" },
    { title: "O Bondhu Lal Golapi", type: "Song", industry: "Bangla", context: "Artist: Momtaz" },
    { title: "Ekta Chilo Sonar Konna", type: "Song", industry: "Bangla", context: "Movie: Srabon Megher Din | Cast: Zahid Hasan" },
    { title: "Sada Sada Kala Kala", type: "Song", industry: "Bangla", context: "Movie: Hawa | Cast: Chanchal Chowdhury" },
    { title: "Oporadhi", type: "Song", industry: "Bangla", context: "Artist: Arman Alif" },
    { title: "Noya Daman", type: "Song", industry: "Bangla", context: "Artist: Muza & Tosiba" },
    { title: "Faissha Gechi", type: "Song", industry: "Bangla", context: "Artist: Hyder Husyn" },
    { title: "Pagla Hawar Tore", type: "Song", industry: "Bangla", context: "Artist: James" },
    { title: "Hashimukh", type: "Song", industry: "Bangla", context: "Artist: Shironamhin" },
    { title: "Bondhu Jokhon Bou Loia", type: "Song", industry: "Bangla", context: "Artist: Monir Khan" },
    { title: "School Khuleche Re Mowla", type: "Song", industry: "Bangla", context: "Artist: Momtaz" },
    { title: "Coffee House", type: "Song", industry: "Bangla", context: "Artist: Manna Dey" },
    { title: "Majhi Nao Chaira De", type: "Song", industry: "Bangla", context: "Artist: Sabina Yasmin" },
    { title: "Krishno Aila Radhar Kunje", type: "Song", industry: "Bangla", context: "Artist: Momtaz" },
    { title: "Sadher Lau", type: "Song", industry: "Bangla", context: "Artist: Momtaz" },
    { title: "Premer Mora Jole Dube Na", type: "Song", industry: "Bangla", context: "Movie: Nishpaap | Cast: Manna" },
    { title: "Chumki Choleche Eka Pothe", type: "Song", industry: "Bangla", context: "Artist: Andrew Kishore" },
    { title: "Ore Nil Doriya", type: "Song", industry: "Bangla", context: "Movie: Sareng Bou | Cast: Farooque" },
    { title: "Haire Manush Rongin Fanush", type: "Song", industry: "Bangla", context: "Artist: Andrew Kishore" },
    { title: "Danpithe", type: "Song", industry: "Bangla", context: "Artist: Minar Rahman" },
    { title: "Tumi Chaile Brishti", type: "Song", industry: "Bangla", context: "Artist: Black" },
    { title: "Ekhon To Somoy Bhalobashar", type: "Song", industry: "Bangla", context: "Movie: Bachelor | Cast: Ferdous Ahmed, Shabnur" },
    { title: "Shagorer Motoi Gobhir", type: "Song", industry: "Bangla", context: "Movie: Keyamat Theke Keyamat | Cast: Salman Shah, Moushumi" },
    { title: "Priya Amar Priya", type: "Song", industry: "Bangla", context: "Movie: Priya Amar Priya | Cast: Shakib Khan, Sahara" },
    { title: "Number One Shakib Khan", type: "Song", industry: "Bangla", context: "Movie: Number One Shakib Khan | Cast: Shakib Khan" },
    { title: "Cholo Niralay", type: "Song", industry: "Bangla", context: "Movie: Poran | Cast: Sariful Razz, Bidya Sinha Mim" },
    { title: "Jao Pakhi Bolo Tare", type: "Song", industry: "Bangla", context: "Movie: Monpura | Cast: Farhana Mili, Chanchal Chowdhury" },
    { title: "Dushtu Kokil", type: "Song", industry: "Bangla", context: "Movie: Toofan | Cast: Shakib Khan, Mimi Chakraborty" },
    { title: "Gari Chole Na", type: "Song", industry: "Bangla", context: "Artist: Bari Siddiqui" },
    { title: "Boshonto Batase", type: "Song", industry: "Bangla", context: "Artist: Shironamhin" },
    { title: "Sona Bondhu Tui Amare", type: "Song", industry: "Bangla", context: "Artist: Momtaz" },
    { title: "De De Pal Tule De", type: "Song", industry: "Bangla", context: "Artist: Folk Song" },
    { title: "Local Bus", type: "Song", industry: "Bangla", context: "Artist: Momtaz & Pritom Hasan" },
    { title: "Ek Paye Nupur", type: "Song", industry: "Bangla", context: "Artist: Topu" },
    { title: "Teer Hara Ei Dheu", type: "Song", industry: "Bangla", context: "Artist: Apel Mahmood" },
    { title: "Mora Ekti Phul Ke", type: "Song", industry: "Bangla", context: "Artist: Apel Mahmood" },
    { title: "Salam Salam Hajar Salam", type: "Song", industry: "Bangla", context: "Artist: Abdul Jabbar" },
    { title: "Ami Banglay Gaan Gai", type: "Song", industry: "Bangla", context: "Artist: Pratul Mukhopadhyay" },
    { title: "Melay Jaire", type: "Song", industry: "Bangla", context: "Artist: Feedback" },
    { title: "Brishti Pore Tapur Tupur", type: "Song", industry: "Bangla", context: "Artist: Folk Song" },
    { title: "Ei Poth Jodi Na Shesh Hoy", type: "Song", industry: "Bangla", context: "Movie: Saptapadi | Cast: Uttam Kumar, Suchitra Sen" },
    { title: "Tumi Mor Jiboner Bhabona", type: "Song", industry: "Bangla", context: "Movie: Anondo Osru | Cast: Salman Shah, Shabnur" },
    { title: "Bhalobasha Dao Bhalobasha Nao", type: "Song", industry: "Bangla", context: "Movie: Bhalobasha Bhalobasha | Cast: Riaz, Purnima" },
    { title: "Tip Tip Brishti", type: "Song", industry: "Bangla", context: "Movie: Srabon Megher Din | Cast: Zahid Hasan, Meher Afroz Shaon" },
    { title: "O Re Sampan Wala", type: "Song", industry: "Bangla", context: "Movie: Chacchu | Cast: Shakib Khan, Apu Biswas" },
    { title: "Barir Manush Koy Amay Tabij...", type: "Song", industry: "Bangla", context: "Artist: Folk Song" },
    { title: "Tomar Barir Ronger Melay", type: "Song", industry: "Bangla", context: "Artist: Folk Song" },
    { title: "Murir Tin", type: "Song", industry: "Bangla", context: "Artist: Pritom Hasan" },
    { title: "Oreh Punjabi Wala", type: "Song", industry: "Bangla", context: "Artist: Momtaz" },
    { title: "Bapuram Shapure", type: "Song", industry: "Bangla", context: "Artist: Folk Song" },
    { title: "Chaina Meye", type: "Song", industry: "Bangla", context: "Artist: Habib Wahid" },
    { title: "Chander Batir Kosom", type: "Song", industry: "Bangla", context: "Artist: Folk Song" },
    { title: "Beyain Shab", type: "Song", industry: "Bangla", context: "Artist: Momtaz & Pritom Hasan" },
    { title: "Assalamu Alaikum Beyain Shab", type: "Song", industry: "Bangla", context: "Artist: Momtaz & Pritom Hasan" },
    { title: "Buk Chin Chin", type: "Song", industry: "Bangla", context: "Artist: Andrew Kishore" },
    { title: "Bioscoper Neshai", type: "Song", industry: "Bangla", context: "Artist: Andrew Kishore" },
    { title: "Tore Putuler Moto Kore Shajiye", type: "Song", industry: "Bangla", context: "Artist: Kumar Bishwajit" },
    { title: "Lage Ura Dhura", type: "Song", industry: "Bangla", context: "Movie: Toofan | Cast: Shakib Khan, Mimi Chakraborty" },
    { title: "Deora", type: "Song", industry: "Bangla", context: "Artist: Pritom Hasan" },
    { title: "Bondhure", type: "Song", industry: "Bangla", context: "Artist: Pritom Hasan" },
    { title: "Shundori Komola", type: "Song", industry: "Bangla", context: "Artist: Momtaz" },
    { title: "Taka O Pakhi", type: "Song", industry: "Bangla", context: "Artist: Pritom Hasan" },
    { title: "Pagol Chara Duniya Chole No", type: "Song", industry: "Bangla", context: "Artist: Folk Song" },
    { title: "Bulbuli", type: "Song", industry: "Bangla", context: "Artist: Ritu Dipranjan" },
    { title: "O Priya Tumi Kothay", type: "Song", industry: "Bangla", context: "Artist: Asif Akbar | Cast: Asif Akbar" },
    { title: "Magic Mamoni", type: "Song", industry: "Bangla", context: "Movie: Agnee 2 | Cast: Mahiya Mahi" },
    { title: "Sona Bou Shunsoni Go", type: "Song", industry: "Bangla", context: "Artist: Folk Song" },
    { title: "Reshmi Churi", type: "Song", industry: "Bangla", context: "Artist: Kona" },
    { title: "Nasek Nasek", type: "Song", industry: "Bangla", context: "Artist: Coke Studio Bangla" },
    { title: "Khoka", type: "Song", industry: "Bangla", context: "Artist: Pritom Hasan" },
    { title: "Ami To Preme Porini", type: "Song", industry: "Bangla", context: "Artist: Hasan" },
    { title: "Biyer Bajna", type: "Song", industry: "Bangla", context: "Artist: Momtaz" },
    { title: "Jhumka", type: "Song", industry: "Bangla", context: "Artist: Xefer & Muza" },
    { title: "Fet Furudde Tuwar Lai", type: "Song", industry: "Bangla", context: "Artist: Chatgaiya Folk" },
    { title: "Head Master", type: "Song", industry: "Bangla", context: "Artist: Chatgaiya Folk" },
    { title: "Modhu Hoi Hoi Bish Khaila", type: "Song", industry: "Bangla", context: "Artist: Jony" },
    { title: "Tumi", type: "Song", industry: "Bangla", context: "Movie: Utshob | Level five" },
    {title: "Jala Jala Jala", type: "Song", industry: "Bangla", context: "Artist: Miles"},

    // --- LATEST ADDITIONS (User Requested) ---
    { title: "Tunak Tunak Tun", type: "Song", industry: "Bollywood", context: "Artist: Daler Mehndi (Indipop)" },
    { title: "Ashona", type: "Song", industry: "Bangla", context: "Artist: Tahsan (Band)" },
    { title: "Tinku Jiya", type: "Song", industry: "Bollywood", context: "Movie: Yamla Pagla Deewana | Cast: Dharmendra, Bobby Deol" },
    { title: "Palki Mein Hoke Sawar", type: "Song", industry: "Bollywood", context: "Movie: Khalnayak | Cast: Madhuri Dixit" },
    { title: "Ore Sampan Wala", type: "Song", industry: "Bangla", context: "Movie: Ore Sampan Wala | Cast: Manna, Shabnur" },
    { title: " Sweety", type: "Song", industry: "Bangla", context: "Artist:   Hasan" },
    { title: "Ai Aile Enka Goror", type: "Song", industry: "Bangla", context: "Region: Chittagonian Folk Song" },
    { title: "Ami Chini Go Chini Tomare", type: "Song", industry: "Bangla", context: "Category: Rabindra Sangeet | Movie: Charulata" },
    { title: "Shundori Furi", type: "Song", industry: "Bangla", context: "Region: Sylheti Wedding Song" },
    { title: "Lilabali", type: "Song", industry: "Bangla", context: "Category: Wedding Song | Coke Studio" },
    { title: "Ekti Chilo Shonar Konna", type: "Song", industry: "Bangla", context: "Artist: Folk Song" },
    { title: "Coffee Houser Sei Addata", type: "Song", industry: "Bangla", context: "Artist: Manna Dey" },
    { title: "Pallu Latke", type: "Song", industry: "Bollywood", context: "Movie: Shaadi Mein Zaroor Aana | Cast: Rajkummar Rao, Kriti Kharbanda" },
    { title: "Suit Suit (Tenu Suit Karda)", type: "Song", industry: "Bollywood", context: "Movie: Hindi Medium | Cast: Irrfan Khan, Saba Qamar" },
    { title: "Sweety Tera Drama", type: "Song", industry: "Bollywood", context: "Movie: Bareilly Ki Barfi | Cast: Kriti Sanon, Ayushmann Khurrana" },

    // --- LATEST ADDITIONS (User Requested) ---
    { title: "Bhalo Koriya Bajao Dotara", type: "Song", industry: "Bangla", context: "Movie: Shatru | Cast: Humayun Faridi (Iconic Dance)" },
    { title: "Amar Gorur Garite", type: "Song", industry: "Bangla", context: "Movie: Akhi Milan | Cast: Ilias Kanchan, Shujorita" },
    { title: "Nachde Ne Saare", type: "Song", industry: "Bollywood", context: "Movie: Baar Baar Dekho | Cast: Katrina Kaif, Sidharth Malhotra" },
    { title: "Jamal Kudu", type: "Song", industry: "Bollywood", context: "Movie: Animal | Cast: Bobby Deol (Glass on head)" },
    { title: "Tootak Tootak Tootiyan", type: "Song", industry: "Bollywood", context: "Artist: Malkit Singh | Hook: Hey Jamalo" },


];


// --- GAME LOGIC ---

let currentList = [];
let historyStack = []; 
let currentItem = null;
let timerInterval = null; // Variable to hold the timer

function initGame() {
    currentList = [...masterList]; 
    historyStack = [];
    currentItem = null;
    updateCounter();
    document.getElementById("prev-btn").disabled = true;
    document.getElementById("timer").innerText = "1:15"; // Reset text
}

function resetGame() {
    const confirmReset = confirm("Start a new game?");
    if (confirmReset) {
        clearInterval(timerInterval); // Stop any running timer
        initGame();
        document.getElementById("main-title").innerText = "Ready?";
        document.getElementById("category-tag").innerText = "New Game";
        document.getElementById("context-info").innerText = "Click Next to start!";
        document.getElementById("prev-btn").disabled = true;
    }
}

function updateCounter() {
    const counterEl = document.getElementById("counter");
    counterEl.innerText = `Remaining: ${currentList.length} / ${masterList.length}`;
}

// --- TIMER LOGIC  ---



function startRoundTimer() {
    clearInterval(timerInterval); 
    const timerEl = document.getElementById("timer");
    
    // Reset Style
    timerEl.classList.remove("timer-danger");
    
    // Set Time: 1 minute 15 seconds = 75 seconds
    let timeLeft = 75; 
    
    updateTimerDisplay(timeLeft);

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay(timeLeft);

        // --- URGENCY PHASE (Last 10 Seconds) ---
        if (timeLeft <= 10 && timeLeft > 0) {
            timerEl.classList.add("timer-danger");
            playTick(); 
        }

        // --- TIME'S UP ---
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerEl.innerText = "0:00";
            
            // Play the "Faaah" Sound
            faaahSound.play().catch(e => console.log("Audio play failed:", e));
        }
    }, 1000);
}

// --- NEW SOUND FUNCTIONS ---

// Generates a sharp "Clock Tick" sound using code
function playTick() {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;

        // Reuse context if possible, or create new
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.connect(gain);
        gain.connect(ctx.destination);

        // Sound: Short, sharp "Woodblock" click
        osc.type = "square"; 
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        
        // Very short duration (0.05s)
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

        osc.start();
        osc.stop(ctx.currentTime + 0.05);
    } catch (e) {
        console.error("Tick error", e);
    }
}


function updateTimerDisplay(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    // Format as M:SS (e.g., 1:05)
    document.getElementById("timer").innerText = `${m}:${s < 10 ? '0' : ''}${s}`;
}

// --- MAIN ACTIONS ---

function getNextItem() {
    const btn = document.getElementById("next-btn");
    
    faaahSound.volume = 0; 
    faaahSound.play().then(() => {
        faaahSound.pause();
        faaahSound.currentTime = 0; 
        faaahSound.volume = 1; 
    }).catch(e => console.log("Audio unlock failed", e));

    if (btn.disabled) return;

    if (currentList.length === 0) {
        alert("Game Over! Resetting...");
        resetGame();
        initGame();
        return;
    }

    playDing();

    if (currentItem) {
        historyStack.push(currentItem);
        document.getElementById("prev-btn").disabled = false;
    }

    const randomIndex = Math.floor(Math.random() * currentList.length);
    const item = currentList[randomIndex];
    currentList.splice(randomIndex, 1);
    currentItem = item;

    renderCard(item);
    updateCounter();
    startCooldown(5);
    
    // START THE TIMER
    startRoundTimer();
}

function getPrevItem() {
    if (historyStack.length === 0) return;
    
    
    clearInterval(timerInterval);
    document.getElementById("timer").innerText = "Paused";

    const lastItem = historyStack.pop(); 
    currentItem = lastItem; 
    renderCard(currentItem);

    if (historyStack.length === 0) {
        document.getElementById("prev-btn").disabled = true;
    }
}

function renderCard(item) {
    const titleEl = document.getElementById("main-title");
    const tagEl = document.getElementById("category-tag");
    const contextEl = document.getElementById("context-info");
    const card = document.getElementById("card-display");

    card.style.transform = "scale(0.95)";
    setTimeout(() => {
        titleEl.innerText = item.title;
        tagEl.innerText = `${item.industry} ${item.type}`;
        contextEl.innerText = item.context;
        card.style.transform = "scale(1)";
    }, 100);
}

function startCooldown(seconds) {
    const btn = document.getElementById("next-btn");
    const originalText = "Next ▶";
    let timeLeft = seconds;

    btn.disabled = true;
    btn.classList.add("disabled-btn");
    btn.innerText = `Wait ${timeLeft}s`;

    const cTimer = setInterval(() => {
        timeLeft--;
        if (timeLeft > 0) {
            btn.innerText = `Wait ${timeLeft}s`;
        } else {
            clearInterval(cTimer);
            btn.disabled = false;
            btn.classList.remove("disabled-btn");
            btn.innerText = originalText;
        }
    }, 1000);
}

function playDing() {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.type = "sine"; 
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.1);
        
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);

        osc.start();
        osc.stop(ctx.currentTime + 0.3);
    } catch (e) {
        console.error("Audio error", e);
    }
}

initGame();