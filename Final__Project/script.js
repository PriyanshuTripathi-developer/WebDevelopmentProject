document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const loginContainer = document.getElementById('loginContainer');
    const mainMenu = document.getElementById('mainMenu');
    const comfortContainer = document.getElementById('comfortContainer');
    const luggageContainer = document.getElementById('luggageContainer');
    const reportContainer = document.getElementById('reportContainer');
    const checkContainer = document.getElementById('checkContainer');
    const womenSafeContainer = document.getElementById('womenSafeContainer');
    const trainInfoContainer = document.getElementById('trainInfoContainer');
    const confirmation = document.getElementById('confirmation');
  //  const homeBtn = document.getElementById('homeBtn');
    const confirmationMessage = document.getElementById('confirmationMessage');
    const header = document.getElementById('header');
    const profileBtn = document.getElementById('profileBtn');
    const profileDropdown = document.getElementById('profileDropdown');
    const subscriptionBtn = document.getElementById('subscriptionBtn');
    const premiumBtnLogin = document.getElementById('premiumBtnLogin');
    
    // Login form elements
    const loginForm = document.getElementById('loginForm');
    const signUpLink = document.getElementById('signUpLink');
    
    // Buttons
    const comfortBtn = document.getElementById('comfortBtn');
    const luggageBtn = document.getElementById('luggageBtn');
    const womenSafeBtn = document.getElementById('womenSafeBtn');
    const trainInfoBtn = document.getElementById('trainInfoBtn');
    const reportBtn = document.getElementById('reportBtn');
    const checkBtn = document.getElementById('checkBtn');
    const homeBtn = document.getElementById('homeBtn');
    const findCoachBtn = document.getElementById('findCoachBtn');
    const searchTrainBtn = document.getElementById('searchTrainBtn');
    const newSubmissionBtn = document.getElementById('newSubmission');
    const logoutBtn = document.getElementById('logoutBtn');
    
    // Subscription elements
    const subscriptionModal = document.getElementById('subscriptionModal');
    const subscriptionClose = document.getElementById('subscriptionClose');
    
    // Forms
    const comfortForm = document.getElementById('comfortForm');
    const reportForm = document.getElementById('reportForm');
    const checkForm = document.getElementById('checkForm');
    
    // Results containers
    const luggageResults = document.getElementById('luggageResults');
    const reportResults = document.getElementById('reportResults');
    const womenResults = document.getElementById('womenResults');
    const trainInfoResults = document.getElementById('trainInfoResults');
    const trainInfoContent = document.getElementById('trainInfoContent');
    const trainDisplay = document.getElementById('trainDisplay');
    const stationDisplay = document.getElementById('stationDisplay');
    const directionDisplay = document.getElementById('directionDisplay');
    const womenCoachNumber = document.getElementById('womenCoachNumber');
    const coachLocation = document.getElementById('coachLocation');
    const nextArrival = document.getElementById('nextArrival');
    const stationSelect = document.getElementById('stationSelect');
    const trainSelect = document.getElementById('trainSelect');
    const trainSearch = document.getElementById('trainSearch');
    
    // Chatbot elements
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotContainer = document.getElementById('chatbotContainer');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotSend = document.getElementById('chatbotSend');
    const voiceBtn = document.getElementById('voiceBtn');
    
    // Sample data with real Indian railway information
    const womenSafeCoachData = {
        "rajdhani": {
            coach: "B2",
            location: "Middle of the train",
            platformLocation: "Near staircase 3",
            direction: "Southbound",
            platform: 3,
            coaches: ["A1", "A2", "B1", "B2", "B3", "C1", "C2"]
        },
        "shatabdi": {
            coach: "C1",
            location: "Front of the train",
            platformLocation: "Near ticket counter",
            direction: "Northbound",
            platform: 1,
            coaches: ["A1", "A2", "B1", "B2", "C1", "C2"]
        },
        "duronto": {
            coach: "A3",
            location: "Rear of the train",
            platformLocation: "Near escalator",
            direction: "Eastbound",
            platform: 2,
            coaches: ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"]
        },
        "garib": {
            coach: "D1",
            location: "Middle-front of the train",
            platformLocation: "Near information desk",
            direction: "Westbound",
            platform: 4,
            coaches: ["A1", "A2", "B1", "B2", "C1", "C2", "D1", "D2"]
        },
        "vande": {
            coach: "A2",
            location: "Front section",
            platformLocation: "Near platform entrance",
            direction: "Southbound",
            platform: 2,
            coaches: ["A1", "A2", "A3", "B1", "B2", "B3"]
        },
        "sampark": {
            coach: "B3",
            location: "Middle-rear of the train",
            platformLocation: "Near waiting hall",
            direction: "Northbound",
            platform: 5,
            coaches: ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"]
        }
    };
    
    const stationData = {
        "delhi": {
            name: "New Delhi (NDLS)",
            platforms: 16,
            info: "New Delhi Railway Station is the main railway station in Delhi and one of the busiest in India."
        },
        "mumbai": {
            name: "Mumbai Central (BCT)",
            platforms: 7,
            info: "Mumbai Central is a major railway terminus in Mumbai, serving long-distance trains."
        },
        "chennai": {
            name: "Chennai Central (MAS)",
            platforms: 12,
            info: "Chennai Central is the main railway terminus in Chennai, serving trains to all parts of India."
        },
        "kolkata": {
            name: "Howrah (HWH)",
            platforms: 23,
            info: "Howrah Station is the largest and oldest railway station in Kolkata with 23 platforms."
        },
        "bangalore": {
            name: "Bengaluru (SBC)",
            platforms: 10,
            info: "Krantivira Sangolli Rayanna (Bengaluru Station) is the main railway station in Bengaluru."
        },
        "hyderabad": {
            name: "Hyderabad (HYB)",
            platforms: 10,
            info: "Hyderabad Deccan Station is the main railway station serving Hyderabad city."
        }
    };
    
    const trainInfoData = {
        "12951": {
            name: "Rajdhani Express (12951)",
            route: "Mumbai Central (BCT) to New Delhi (NDLS)",
            duration: "15h 35m",
            classes: "1A, 2A, 3A, SL",
            departure: "17:00",
            arrival: "08:35 (+1 day)",
            womenCoach: "B2",
            status: "on-time",
            delay: "0",
            lastUpdated: "5 minutes ago"
        },
        "12002": {
            name: "Shatabdi Express (12002)",
            route: "New Delhi (NDLS) to Bhopal (BPL)",
            duration: "8h 15m",
            classes: "CC, EC",
            departure: "06:00",
            arrival: "14:15",
            womenCoach: "C1",
            status: "delayed",
            delay: "45 minutes",
            lastUpdated: "15 minutes ago"
        },
        "12267": {
            name: "Duronto Express (12267)",
            route: "Howrah (HWH) to Bengaluru (SBC)",
            duration: "33h 30m",
            classes: "1A, 2A, 3A, SL",
            departure: "20:50",
            arrival: "06:20 (+2 days)",
            womenCoach: "A3",
            status: "on-time",
            delay: "0",
            lastUpdated: "10 minutes ago"
        },
        "12201": {
            name: "Garib Rath (12201)",
            route: "Mumbai (LTT) to Kochuveli (KCVL)",
            duration: "24h 45m",
            classes: "3A",
            departure: "12:30",
            arrival: "13:15 (+1 day)",
            womenCoach: "D1",
            status: "cancelled",
            delay: "N/A",
            lastUpdated: "2 hours ago"
        },
        "22201": {
            name: "Vande Bharat (22201)",
            route: "New Delhi (NDLS) to Varanasi (BSB)",
            duration: "8h 0m",
            classes: "CC",
            departure: "06:00",
            arrival: "14:00",
            womenCoach: "A2",
            status: "on-time",
            delay: "0",
            lastUpdated: "30 minutes ago"
        },
        "12449": {
            name: "Sampark Kranti (12449)",
            route: "Hazrat Nizamuddin (NZM) to Thiruvananthapuram (TVC)",
            duration: "47h 30m",
            classes: "2A, 3A, SL",
            departure: "11:20",
            arrival: "10:50 (+2 days)",
            womenCoach: "B3",
            status: "delayed",
            delay: "1 hour 15 minutes",
            lastUpdated: "45 minutes ago"
        }
    };
    
    const directions = {
        "Southbound": "Towards Mumbai/Chennai/Bengaluru",
        "Northbound": "Towards Delhi/Amritsar/Chandigarh",
        "Eastbound": "Towards Kolkata/Guwahati",
        "Westbound": "Towards Mumbai/Ahmedabad"
    };
    
    // Train autocomplete data
    const trainAutocompleteData = [
        "Rajdhani Express (12951)",
        "Shatabdi Express (12002)",
        "Duronto Express (12267)",
        "Garib Rath (12201)",
        "Vande Bharat (22201)",
        "Sampark Kranti (12449)",
        "Shatabdi Express (12001)",
        "Rajdhani Express (12952)",
        "Duronto Express (12268)",
        "Garib Rath (12202)",
        "Vande Bharat (22202)",
        "Sampark Kranti (12450)"
    ];
    
    // Station autocomplete data
    const stationAutocompleteData = [
        "New Delhi (NDLS)",
        "Mumbai Central (BCT)",
        "Chennai Central (MAS)",
        "Howrah (HWH)",
        "Bengaluru (SBC)",
        "Hyderabad (HYB)",
        "Secunderabad (SC)",
        "Ahmedabad (ADI)",
        "Pune (PUNE)",
        "Jaipur (JP)",
        "Lucknow (LKO)",
        "Patna (PNBE)"
    ];
    
    // Navigation functions
    function showLogin() {
        loginContainer.style.display = 'flex';
        mainMenu.style.display = 'none';
        comfortContainer.style.display = 'none';
        luggageContainer.style.display = 'none';
        reportContainer.style.display = 'none';
        checkContainer.style.display = 'none';
        womenSafeContainer.style.display = 'none';
        trainInfoContainer.style.display = 'none';
        confirmation.style.display = 'none';
        header.style.display = 'none';
        luggageResults.style.display = 'none';
        womenResults.style.display = 'none';
        trainInfoResults.style.display = 'none';
    }
    
    function showMainMenu() {
        loginContainer.style.display = 'none';
        mainMenu.style.display = 'block';
        comfortContainer.style.display = 'none';
        luggageContainer.style.display = 'none';
        reportContainer.style.display = 'none';
        checkContainer.style.display = 'none';
        womenSafeContainer.style.display = 'none';
        trainInfoContainer.style.display = 'none';
        confirmation.style.display = 'none';
        header.style.display = 'flex';
        luggageResults.style.display = 'none';
        womenResults.style.display = 'none';
        trainInfoResults.style.display = 'none';
    }
    
    function showComfortForm() {
        loginContainer.style.display = 'none';
        mainMenu.style.display = 'none';
        comfortContainer.style.display = 'block';
        luggageContainer.style.display = 'none';
        reportContainer.style.display = 'none';
        checkContainer.style.display = 'none';
        womenSafeContainer.style.display = 'none';
        trainInfoContainer.style.display = 'none';
        confirmation.style.display = 'none';
        header.style.display = 'flex';
    }
    
    function showLuggageMenu() {
        loginContainer.style.display = 'none';
        mainMenu.style.display = 'none';
        comfortContainer.style.display = 'none';
        luggageContainer.style.display = 'block';
        reportContainer.style.display = 'none';
        checkContainer.style.display = 'none';
        womenSafeContainer.style.display = 'none';
        trainInfoContainer.style.display = 'none';
        confirmation.style.display = 'none';
        header.style.display = 'flex';
    }
    
    function showReportForm() {
        loginContainer.style.display = 'none';
        mainMenu.style.display = 'none';
        comfortContainer.style.display = 'none';
        luggageContainer.style.display = 'none';
        reportContainer.style.display = 'block';
        checkContainer.style.display = 'none';
        womenSafeContainer.style.display = 'none';
        trainInfoContainer.style.display = 'none';
        confirmation.style.display = 'none';
        header.style.display = 'flex';
    }
    
    function showCheckForm() {
        loginContainer.style.display = 'none';
        mainMenu.style.display = 'none';
        comfortContainer.style.display = 'none';
        luggageContainer.style.display = 'none';
        reportContainer.style.display = 'none';
        checkContainer.style.display = 'block';
        womenSafeContainer.style.display = 'none';
        trainInfoContainer.style.display = 'none';
        confirmation.style.display = 'none';
        header.style.display = 'flex';
        luggageResults.style.display = 'none';
    }
    
    function showWomenSafe() {
        loginContainer.style.display = 'none';
        mainMenu.style.display = 'none';
        comfortContainer.style.display = 'none';
        luggageContainer.style.display = 'none';
        reportContainer.style.display = 'none';
        checkContainer.style.display = 'none';
        womenSafeContainer.style.display = 'block';
        trainInfoContainer.style.display = 'none';
        confirmation.style.display = 'none';
        header.style.display = 'flex';
        womenResults.style.display = 'none';
    }
    
    function showTrainInfo() {
        loginContainer.style.display = 'none';
        mainMenu.style.display = 'none';
        comfortContainer.style.display = 'none';
        luggageContainer.style.display = 'none';
        reportContainer.style.display = 'none';
        checkContainer.style.display = 'none';
        womenSafeContainer.style.display = 'none';
        trainInfoContainer.style.display = 'block';
        confirmation.style.display = 'none';
        header.style.display = 'flex';
        trainInfoResults.style.display = 'none';
    }
    
    function showConfirmation(message) {
        loginContainer.style.display = 'none';
        mainMenu.style.display = 'none';
        comfortContainer.style.display = 'none';
        luggageContainer.style.display = 'none';
        reportContainer.style.display = 'none';
        checkContainer.style.display = 'none';
        womenSafeContainer.style.display = 'none';
        trainInfoContainer.style.display = 'none';
        confirmation.style.display = 'block';
        header.style.display = 'flex';
        confirmationMessage.textContent = message;
        
        // Confetti effect
        for (let i = 0; i < 50; i++) {
            createConfetti();
        }
    }
    
    // Event listeners
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('rememberMe').checked;
        
        // In a real app, validate and send to server
        console.log({
            username,
            email,
            password,
            rememberMe
        });
        
        // Show main menu after login
        showMainMenu();
        
        // Show welcome message in chatbot
        setTimeout(() => {
            if (chatbotMessages.children.length === 0) {
                addBotMessage(`Welcome aboard, ${username}! I'm your Indian Railway AI Assistant. How can I help you with your journey today?`);
            }
        }, 1000);
    });
    
    signUpLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Sign up functionality will be implemented soon!');
    });
    
    comfortBtn.addEventListener('click', showComfortForm);
    luggageBtn.addEventListener('click', showLuggageMenu);
    womenSafeBtn.addEventListener('click', showWomenSafe);
    trainInfoBtn.addEventListener('click', showTrainInfo);
    reportBtn.addEventListener('click', showReportForm);
    checkBtn.addEventListener('click', showCheckForm);
    homeBtn.addEventListener('click', showMainMenu);
    
    // Profile dropdown toggle
    profileBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        profileDropdown.classList.toggle('show');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        profileDropdown.classList.remove('show');
    });
    
    // Prevent dropdown from closing when clicking inside it
    profileDropdown.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    // Logout functionality
    logoutBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showLogin();
        profileDropdown.classList.remove('show');
    });
    
    // Subscription modal
    subscriptionBtn.addEventListener('click', function() {
        subscriptionModal.classList.add('active');
    });
    
    premiumBtnLogin.addEventListener('click', function() {
        subscriptionModal.classList.add('active');
    });
    
    subscriptionClose.addEventListener('click', function() {
        subscriptionModal.classList.remove('active');
    });
    
    subscriptionModal.addEventListener('click', function(e) {
        if (e.target === subscriptionModal) {
            subscriptionModal.classList.remove('active');
        }
    });
    
    newSubmissionBtn.addEventListener('click', function() {
        if (comfortContainer.style.display === 'block') {
            comfortForm.reset();
            showComfortForm();
        } else if (reportContainer.style.display === 'block') {
            reportForm.reset();
            showReportForm();
        } else if (womenSafeContainer.style.display === 'block') {
            stationSelect.value = '';
            trainSelect.value = '';
            womenResults.style.display = 'none';
            showWomenSafe();
        } else if (trainInfoContainer.style.display === 'block') {
            trainSearch.value = '';
            trainInfoResults.style.display = 'none';
            showTrainInfo();
        } else {
            showMainMenu();
        }
    });
    
    // Form submissions
    comfortForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const trainNumber = document.getElementById('comfortTrainNumber').value;
        const coachNumber = document.getElementById('comfortCoachNumber').value;
        const cleanliness = document.querySelector('input[name="cleanliness"]:checked').value;
        const seatComfort = document.querySelector('input[name="seatComfort"]:checked').value;
        const noiseLevel = document.querySelector('input[name="noiseLevel"]:checked').value;
        const comments = document.getElementById('comfortComments').value;
        
        // In a real app, send to server
        console.log({
            type: "comfort_rating",
            trainNumber,
            coachNumber,
            cleanliness,
            seatComfort,
            noiseLevel,
            comments,
            timestamp: new Date().toISOString()
        });
        
        showConfirmation("Your comfort rating has been submitted successfully!");
    });
    
    reportForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const trainNumber = document.getElementById('reportTrainNumber').value;
        const coachNumber = document.getElementById('reportCoachNumber').value;
        const spaceStatus = document.querySelector('input[name="spaceStatus"]:checked').value;
        const comments = document.getElementById('reportComments').value;
        
        // In a real app, send to server
        console.log({
            type: "luggage_report",
            trainNumber,
            coachNumber,
            spaceStatus,
            comments,
            timestamp: new Date().toISOString()
        });
        
        showConfirmation("Your luggage report has been submitted successfully!");
    });
    
    checkForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const trainNumber = document.getElementById('checkTrainNumber').value;
        const coachNumber = document.getElementById('checkCoachNumber').value;
        
        // Filter sample reports
        const filteredReports = [
            {
                train: "Rajdhani Express (12951)",
                coach: "B2",
                status: "free",
                statusText: "Plenty of Space",
                comment: "Upper racks almost empty, space near doors available",
                timestamp: "10 minutes ago"
            },
            {
                train: "Rajdhani Express (12951)",
                coach: "A1",
                status: "limited",
                statusText: "Limited Space",
                comment: "Only small bags can fit now",
                timestamp: "25 minutes ago"
            }
        ].filter(report => {
            return report.train.toLowerCase().includes(trainNumber.toLowerCase()) && 
                  (coachNumber === '' || report.coach.toLowerCase() === coachNumber.toLowerCase());
        });
        
        // Display results
        if (filteredReports.length > 0) {
            reportResults.innerHTML = filteredReports.map(report => `
                <div class="report-item">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                        <strong>Coach ${report.coach}</strong>
                        <span style="background-color: ${getStatusColor(report.status)}; 
                              padding: 0.2rem 0.5rem; border-radius: 50px; font-size: 0.8rem;">
                            ${report.statusText}
                        </span>
                    </div>
                    <div style="margin-bottom: 0.5rem;">${report.comment}</div>
                    <div style="font-size: 0.8rem; color: rgba(255,255,255,0.7);">${report.timestamp}</div>
                </div>
            `).join('');
        } else {
            reportResults.innerHTML = `<div style="text-align: center; padding: 1rem;">No recent reports found for this search.</div>`;
        }
        
        luggageResults.style.display = 'block';
        luggageResults.scrollIntoView({ behavior: 'smooth' });
    });
    
    findCoachBtn.addEventListener('click', function() {
        const station = stationSelect.value;
        const train = trainSelect.value;
        
        if (!station || !train) {
            alert("Please select both station and train");
            return;
        }
        
        // Get data for selected train
        const trainData = womenSafeCoachData[train];
        const stationInfo = stationData[station];
        
        // Update display
        stationDisplay.textContent = stationInfo.name;
        directionDisplay.textContent = `Platform ${trainData.platform} (${directions[trainData.direction]})`;
        womenCoachNumber.textContent = trainData.coach;
        coachLocation.textContent = trainData.platformLocation;
        
        // Generate random arrival time (2-10 mins)
        const mins = Math.floor(Math.random() * 9) + 2;
        const now = new Date();
        now.setMinutes(now.getMinutes() + mins);
        const timeStr = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        nextArrival.textContent = `${timeStr} (${mins} min${mins !== 1 ? 's' : ''})`;
        
        // Generate train coaches
        trainDisplay.innerHTML = '';
        trainData.coaches.forEach(coach => {
            const coachElement = document.createElement('div');
            coachElement.className = 'coach';
            coachElement.textContent = coach;
            
            if (coach === trainData.coach) {
                coachElement.classList.add('women-safe');
                coachElement.title = `Women-only coach (${trainData.location})`;
            }
            
            trainDisplay.appendChild(coachElement);
        });
        
        womenResults.style.display = 'block';
        womenResults.scrollIntoView({ behavior: 'smooth' });
    });
    
    searchTrainBtn.addEventListener('click', function() {
        const searchTerm = trainSearch.value.trim();
        
        if (!searchTerm) {
            alert("Please enter a train number or name");
            return;
        }
        
        // Find matching train
        const trainKey = Object.keys(trainInfoData).find(key => 
            trainInfoData[key].name.toLowerCase().includes(searchTerm.toLowerCase()) || 
            key.includes(searchTerm)
        );
        
        if (trainKey) {
            const train = trainInfoData[trainKey];
            
            // Display train information
            trainInfoContent.innerHTML = `
                <div class="train-info-card">
                    <div class="train-info-header">
                        <h3>${train.name}</h3>
                        <span class="train-number">${trainKey}</span>
                    </div>
                    <div class="train-status ${train.status === 'on-time' ? 'status-on-time' : 
                        train.status === 'delayed' ? 'status-delayed' : 'status-cancelled'}">
                        ${train.status === 'on-time' ? 'On Time' : 
                         train.status === 'delayed' ? `Delayed by ${train.delay}` : 'Cancelled'}
                    </div>
                    <p style="margin: 0.5rem 0; font-size: 0.9rem; opacity: 0.8;">
                        Last updated: ${train.lastUpdated}
                    </p>
                    
                    <div class="train-route">
                        <div class="route-station">
                            <div class="station-time">${train.departure}</div>
                            <div class="station-name">${train.route.split(' to ')[0]}</div>
                        </div>
                        <div class="route-arrow">→</div>
                        <div class="route-station">
                            <div class="station-time">${train.arrival}</div>
                            <div class="station-name">${train.route.split(' to ')[1]}</div>
                        </div>
                    </div>
                    
                    <div class="train-details">
                        <div class="detail-item">
                            <i class="fas fa-clock"></i>
                            <span>Duration: ${train.duration}</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-chair"></i>
                            <span>Classes: ${train.classes}</span>
                        </div>
                    </div>
                    
                    <div class="train-details" style="margin-top: 0.5rem;">
                        <div class="detail-item">
                            <i class="fas fa-female"></i>
                            <span>Women's Coach: ${train.womenCoach}</span>
                        </div>
                    </div>
                </div>
                
                <div style="text-align: center; margin-top: 1rem;">
                    <a href="https://enquiry.indianrail.gov.in/mntes/" target="_blank" 
                       style="color: var(--light); text-decoration: underline;">
                        Check real-time status on IRCTC
                    </a>
                </div>
            `;
        } else {
            trainInfoContent.innerHTML = `
                <div style="text-align: center; padding: 2rem;">
                    <p>No train found matching "${searchTerm}"</p>
                    <p>Try searching for:</p>
                    <ul style="list-style: none; padding: 0;">
                        <li>Rajdhani Express</li>
                        <li>Shatabdi Express</li>
                        <li>12951 (Rajdhani Express number)</li>
                    </ul>
                </div>
            `;
        }
        
        trainInfoResults.style.display = 'block';
        trainInfoResults.scrollIntoView({ behavior: 'smooth' });
    });
    
    function getStatusColor(status) {
        switch(status) {
            case 'free': return 'rgba(0, 184, 148, 0.7)';
            case 'limited': return 'rgba(253, 203, 110, 0.7)';
            case 'full': return 'rgba(225, 112, 85, 0.7)';
            case 'overflow': return 'rgba(214, 48, 49, 0.7)';
            default: return 'rgba(255,255,255,0.2)';
        }
    }
    
    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.innerHTML = ['🧳', '🎒', '🚆', '💺', '💖', '✅'][Math.floor(Math.random() * 6)];
        confetti.style.position = 'fixed';
        confetti.style.fontSize = (Math.random() * 20 + 10) + 'px';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-50px';
        confetti.style.opacity = Math.random() * 0.5 + 0.5;
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
    
    // Autocomplete functionality
    function autocomplete(inp, arr) {
        let currentFocus;
        
        inp.addEventListener("input", function(e) {
            let a, b, i, val = this.value;
            
            closeAllLists();
            if (!val) { return false; }
            currentFocus = -1;
            
            a = document.createElement("div");
            a.setAttribute("id", this.id + "autocomplete-list");
            a.setAttribute("class", "autocomplete-items");
            this.parentNode.appendChild(a);
            
            for (i = 0; i < arr.length; i++) {
                if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                    b = document.createElement("div");
                    b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                    b.innerHTML += arr[i].substr(val.length);
                    b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                    b.addEventListener("click", function(e) {
                        inp.value = this.getElementsByTagName("input")[0].value;
                        closeAllLists();
                    });
                    a.appendChild(b);
                }
            }
        });
        
        inp.addEventListener("keydown", function(e) {
            let x = document.getElementById(this.id + "autocomplete-list");
            if (x) x = x.getElementsByTagName("div");
            if (e.keyCode == 40) { // Down arrow
                currentFocus++;
                addActive(x);
            } else if (e.keyCode == 38) { // Up arrow
                currentFocus--;
                addActive(x);
            } else if (e.keyCode == 13) { // Enter
                e.preventDefault();
                if (currentFocus > -1) {
                    if (x) x[currentFocus].click();
                }
            }
        });
        
        function addActive(x) {
            if (!x) return false;
            removeActive(x);
            if (currentFocus >= x.length) currentFocus = 0;
            if (currentFocus < 0) currentFocus = (x.length - 1);
            x[currentFocus].classList.add("autocomplete-active");
        }
        
        function removeActive(x) {
            for (let i = 0; i < x.length; i++) {
                x[i].classList.remove("autocomplete-active");
            }
        }
        
        function closeAllLists(elmnt) {
            let x = document.getElementsByClassName("autocomplete-items");
            for (let i = 0; i < x.length; i++) {
                if (elmnt != x[i] && elmnt != inp) {
                    x[i].parentNode.removeChild(x[i]);
                }
            }
        }
        
        document.addEventListener("click", function(e) {
            closeAllLists(e.target);
        });
    }
    
    // Initialize autocomplete
    autocomplete(document.getElementById("comfortTrainNumber"), trainAutocompleteData);
    autocomplete(document.getElementById("reportTrainNumber"), trainAutocompleteData);
    autocomplete(document.getElementById("checkTrainNumber"), trainAutocompleteData);
    autocomplete(document.getElementById("trainSearch"), trainAutocompleteData);
    
    // Chatbot functionality
    let chatbotOpen = false;
    
    chatbotToggle.addEventListener('click', function() {
        chatbotOpen = !chatbotOpen;
        if (chatbotOpen) {
            chatbotContainer.classList.add('open');
            chatbotInput.focus();
            // Send welcome message if first time opening
            if (chatbotMessages.children.length === 0) {
                addBotMessage("Hello! I'm your Indian Railway AI Assistant. I can help with train schedules, station information, women's safety, luggage policies, and more. How can I assist you today?");
            }
        } else {
            chatbotContainer.classList.remove('open');
        }
    });
    
    chatbotClose.addEventListener('click', function() {
        chatbotOpen = false;
        chatbotContainer.classList.remove('open');
    });
    
    function addBotMessage(text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message message-bot';
        messageDiv.innerHTML = `
            <div class="message-content bot-message">${text}</div>
        `;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    function addUserMessage(text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message message-user';
        messageDiv.innerHTML = `
            <div class="message-content user-message">${text}</div>
        `;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    function addTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message message-bot';
        typingDiv.innerHTML = `
            <div class="message-content bot-message">
                <div class="ai-typing">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        chatbotMessages.appendChild(typingDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        return typingDiv;
    }
    
    function removeTypingIndicator(typingDiv) {
        typingDiv.remove();
    }
    
    function getAIResponse(question) {
        const lowerQuestion = question.toLowerCase();
        
        if (lowerQuestion.includes('status') || lowerQuestion.includes('running')) {
            if (lowerQuestion.includes('rajdhani')) {
                return "Rajdhani Express (12951) is currently running on time. The next departure is at 17:00 from Mumbai Central (BCT) to New Delhi (NDLS). You can check real-time status at <a href='https://enquiry.indianrail.gov.in/mntes/' target='_blank'>IRCTC Enquiry</a>.";
            } else if (lowerQuestion.includes('shatabdi')) {
                return "Shatabdi Express (12002) is currently delayed by approximately 45 minutes due to fog. The next departure is at 06:00 from New Delhi (NDLS) to Bhopal (BPL).";
            } else {
                return "For train running status, please provide the train number or name. You can also check real-time status at <a href='https://enquiry.indianrail.gov.in/mntes/' target='_blank'>IRCTC Enquiry</a>.";
            }
        } else if (lowerQuestion.includes('women') || lowerQuestion.includes('ladies') || lowerQuestion.includes('female')) {
            return "Women-only coaches are usually located in the middle of the train. In most long-distance trains, it's marked as 'B2' or 'C1'. You can use the Women-Safe Coach feature in this app to find the exact location at your station.";
        } else if (lowerQuestion.includes('luggage') || lowerQuestion.includes('baggage')) {
            return "You can check luggage space availability using our Luggage Space Checker feature. Passengers report space availability in real-time. The standard luggage allowance is 70kg for 1AC, 50kg for 2AC/3AC, and 40kg for Sleeper class.";
        } else if (lowerQuestion.includes('pnr') || lowerQuestion.includes('ticket')) {
            return "You can check your PNR status at: <a href='https://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html?locale=en' target='_blank'>PNR Status Check</a>. Please have your 10-digit PNR number ready.";
        } else if (lowerQuestion.includes('station') || lowerQuestion.includes('platform')) {
            return "Station information is available in our Women-Safe Coach feature. Select your station to see platform details. Most major stations have facilities like waiting rooms, food stalls, and porter services.";
        } else if (lowerQuestion.includes('food') || lowerQuestion.includes('meal')) {
            return "Most Rajdhani, Shatabdi and Duronto trains provide complimentary meals. For other trains, you can order food through IRCTC's e-catering service at <a href='https://www.ecatering.irctc.co.in/' target='_blank'>IRCTC eCatering</a> or buy from station vendors.";
        } else if (lowerQuestion.includes('hello') || lowerQuestion.includes('hi')) {
            return "Hello! How can I assist you with your Indian Railways journey today?";
        } else if (lowerQuestion.includes('thank')) {
            return "You're welcome! Is there anything else I can help you with?";
        } else if (lowerQuestion.includes('delay') || lowerQuestion.includes('late')) {
            return "Train delays can occur due to various reasons like fog, maintenance work, or operational issues. You can check real-time status of any train at <a href='https://enquiry.indianrail.gov.in/mntes/' target='_blank'>IRCTC Enquiry</a>.";
        } else if (lowerQuestion.includes('book') || lowerQuestion.includes('ticket')) {
            return "You can book train tickets through the official IRCTC website: <a href='https://www.irctc.co.in/' target='_blank'>IRCTC</a>. For Tatkal tickets, booking opens at 10 AM for AC classes and 11 AM for non-AC classes one day before journey.";
        } else if (lowerQuestion.includes('premium') || lowerQuestion.includes('subscription')) {
            return "Our premium subscription offers real-time train tracking, advanced AI assistance, priority support, and ad-free experience. Click the 'Premium Plans' button at the top right to see all features and pricing options.";
        } else {
            return "I'm sorry, I didn't understand that. I can help with train schedules, station information, ticket booking, women's safety, luggage policies, and general railway information. Please try asking about one of these topics.";
        }
    }
    
    function handleUserInput() {
        const userInput = chatbotInput.value.trim();
        if (userInput === '') return;
        
        addUserMessage(userInput);
        chatbotInput.value = '';
        
        // Show typing indicator
        const typingIndicator = addTypingIndicator();
        
        // Simulate AI processing
        setTimeout(() => {
            removeTypingIndicator(typingIndicator);
            
            // Get AI response
            const response = getAIResponse(userInput);
            addBotMessage(response);
        }, 1500);
    }
    
    // Voice command functionality
    let recognition;
    try {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.lang = 'en-IN';
        
        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            chatbotInput.value = transcript;
            
            // Auto-submit if question is detected
            if (transcript.trim().length > 5) {
                handleUserInput();
            }
        };
        
        recognition.onerror = function(event) {
            console.error('Speech recognition error', event.error);
            voiceBtn.classList.remove('listening');
            
            // Show error in chatbot
            const typingIndicator = addTypingIndicator();
            
            setTimeout(() => {
                removeTypingIndicator(typingIndicator);
                addBotMessage("Sorry, I couldn't understand your voice command. Please try typing your question.");
            }, 500);
        };
        
        recognition.onend = function() {
            voiceBtn.classList.remove('listening');
        };
        
        voiceBtn.addEventListener('click', function() {
            if (voiceBtn.classList.contains('listening')) {
                recognition.stop();
                voiceBtn.classList.remove('listening');
            } else {
                recognition.start();
                voiceBtn.classList.add('listening');
            }
        });
    } catch(e) {
        console.error("Speech recognition not supported", e);
        voiceBtn.style.display = 'none';
    }
    
    chatbotSend.addEventListener('click', handleUserInput);
    
    chatbotInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });
    
    // Add animation for confetti
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fall {
            to {
                transform: translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Create moving background elements
    function createMovingTrain() {
        const train = document.createElement('div');
        train.className = 'train-moving';
        train.textContent = Math.random() > 0.5 ? '🚄' : '🚂';
        train.style.animationDuration = (15 + Math.random() * 15) + 's';
        train.style.bottom = (Math.random() * 50) + 'px';
        document.body.appendChild(train);
        
        setTimeout(() => {
            train.remove();
        }, parseFloat(train.style.animationDuration) * 1000);
    }
    
    function createLuggageIcon() {
        const luggage = document.createElement('div');
        luggage.className = 'luggage-icon';
        luggage.textContent = ['🧳', '🎒', '👜', '💼'][Math.floor(Math.random() * 4)];
        luggage.style.top = (Math.random() * 80 + 5) + '%';
        luggage.style.left = (Math.random() * 90 + 5) + '%';
        luggage.style.animationDelay = (Math.random() * 2) + 's';
        document.body.appendChild(luggage);
        
        setTimeout(() => {
            luggage.remove();
        }, 10000);
    }
    
    function createHeartIcon() {
        const heart = document.createElement('div');
        heart.className = 'heart-icon';
        heart.innerHTML = ['💖', '💗', '💓', '💕'][Math.floor(Math.random() * 4)];
        heart.style.top = (Math.random() * 80 + 5) + '%';
        heart.style.left = (Math.random() * 90 + 5) + '%';
        heart.style.animationDelay = (Math.random() * 2) + 's';
        heart.style.fontSize = (Math.random() * 1 + 1) + 'rem';
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 10000);
    }
    
    function createAIParticle() {
        const particle = document.createElement('div');
        particle.className = 'ai-particle';
        particle.innerHTML = ['🤖', '💡', '🧠', '⚡'][Math.floor(Math.random() * 4)];
        particle.style.top = (Math.random() * 80 + 5) + '%';
        particle.style.left = (Math.random() * 90 + 5) + '%';
        particle.style.animationDelay = (Math.random() * 2) + 's';
        particle.style.fontSize = (Math.random() * 1 + 0.5) + 'rem';
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 10000);
    }
    
    function createLoginParticle() {
        const particle = document.createElement('div');
        particle.className = 'login-particle';
        particle.innerHTML = ['🚆', '🎫', '🛤️', '🚉', '🚊', '🚞'][Math.floor(Math.random() * 6)];
        particle.style.top = (Math.random() * 80 + 5) + '%';
        particle.style.left = (Math.random() * 90 + 5) + '%';
        particle.style.animationDelay = (Math.random() * 2) + 's';
        particle.style.fontSize = (Math.random() * 1 + 1) + 'rem';
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 10000);
    }
    
    // Create initial background elements
    for (let i = 0; i < 3; i++) {
        setTimeout(createMovingTrain, i * 5000);
        setTimeout(createLuggageIcon, i * 3000);
        setTimeout(createHeartIcon, i * 4000);
        setTimeout(createAIParticle, i * 3500);
        setTimeout(createLoginParticle, i * 2500);
    }
    
    // Continue creating them periodically
    setInterval(createMovingTrain, 15000);
    setInterval(createLuggageIcon, 8000);
    setInterval(createHeartIcon, 10000);
    setInterval(createAIParticle, 9000);
    setInterval(createLoginParticle, 7000);
    
    // Show login page by default
    showLogin();
});