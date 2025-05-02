document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const mainMenu = document.getElementById('mainMenu');
    const comfortContainer = document.getElementById('comfortContainer');
    const luggageContainer = document.getElementById('luggageContainer');
    const reportContainer = document.getElementById('reportContainer');
    const checkContainer = document.getElementById('checkContainer');
    const womenSafeContainer = document.getElementById('womenSafeContainer');
    const confirmation = document.getElementById('confirmation');
    const homeBtn = document.getElementById('homeBtn');
    const confirmationMessage = document.getElementById('confirmationMessage');
    
    // Buttons
    const comfortBtn = document.getElementById('comfortBtn');
    const luggageBtn = document.getElementById('luggageBtn');
    const womenSafeBtn = document.getElementById('womenSafeBtn');
    const trainInfoBtn = document.getElementById('trainInfoBtn');
    const reportBtn = document.getElementById('reportBtn');
    const checkBtn = document.getElementById('checkBtn');
    const findCoachBtn = document.getElementById('findCoachBtn');
    const newSubmissionBtn = document.getElementById('newSubmission');
    
    // Forms
    const comfortForm = document.getElementById('comfortForm');
    const reportForm = document.getElementById('reportForm');
    const checkForm = document.getElementById('checkForm');
    
    // Results containers
    const luggageResults = document.getElementById('luggageResults');
    const reportResults = document.getElementById('reportResults');
    const womenResults = document.getElementById('womenResults');
    const trainDisplay = document.getElementById('trainDisplay');
    const stationDisplay = document.getElementById('stationDisplay');
    const directionDisplay = document.getElementById('directionDisplay');
    const womenCoachNumber = document.getElementById('womenCoachNumber');
    const coachLocation = document.getElementById('coachLocation');
    const nextArrival = document.getElementById('nextArrival');
    const stationSelect = document.getElementById('stationSelect');
    const trainSelect = document.getElementById('trainSelect');
    
    // Chatbot elements
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotContainer = document.getElementById('chatbotContainer');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotSend = document.getElementById('chatbotSend');
    
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
            womenCoach: "B2"
        },
        "12002": {
            name: "Shatabdi Express (12002)",
            route: "New Delhi (NDLS) to Bhopal (BPL)",
            duration: "8h 15m",
            classes: "CC, EC",
            departure: "06:00",
            arrival: "14:15",
            womenCoach: "C1"
        },
        "12267": {
            name: "Duronto Express (12267)",
            route: "Howrah (HWH) to Bengaluru (SBC)",
            duration: "33h 30m",
            classes: "1A, 2A, 3A, SL",
            departure: "20:50",
            arrival: "06:20 (+2 days)",
            womenCoach: "A3"
        },
        "12201": {
            name: "Garib Rath (12201)",
            route: "Mumbai (LTT) to Kochuveli (KCVL)",
            duration: "24h 45m",
            classes: "3A",
            departure: "12:30",
            arrival: "13:15 (+1 day)",
            womenCoach: "D1"
        },
        "22201": {
            name: "Vande Bharat (22201)",
            route: "New Delhi (NDLS) to Varanasi (BSB)",
            duration: "8h 0m",
            classes: "CC",
            departure: "06:00",
            arrival: "14:00",
            womenCoach: "A2"
        },
        "12449": {
            name: "Sampark Kranti (12449)",
            route: "Hazrat Nizamuddin (NZM) to Thiruvananthapuram (TVC)",
            duration: "47h 30m",
            classes: "2A, 3A, SL",
            departure: "11:20",
            arrival: "10:50 (+2 days)",
            womenCoach: "B3"
        }
    };
    
    const directions = {
        "Southbound": "Towards Mumbai/Chennai/Bengaluru",
        "Northbound": "Towards Delhi/Amritsar/Chandigarh",
        "Eastbound": "Towards Kolkata/Guwahati",
        "Westbound": "Towards Mumbai/Ahmedabad"
    };
    
    // Navigation functions
    function showMainMenu() {
        mainMenu.style.display = 'block';
        comfortContainer.style.display = 'none';
        luggageContainer.style.display = 'none';
        reportContainer.style.display = 'none';
        checkContainer.style.display = 'none';
        womenSafeContainer.style.display = 'none';
        confirmation.style.display = 'none';
        homeBtn.style.display = 'none';
        luggageResults.style.display = 'none';
        womenResults.style.display = 'none';
    }
    
    function showComfortForm() {
        mainMenu.style.display = 'none';
        comfortContainer.style.display = 'block';
        luggageContainer.style.display = 'none';
        reportContainer.style.display = 'none';
        checkContainer.style.display = 'none';
        womenSafeContainer.style.display = 'none';
        confirmation.style.display = 'none';
        homeBtn.style.display = 'flex';
    }
    
    function showLuggageMenu() {
        mainMenu.style.display = 'none';
        comfortContainer.style.display = 'none';
        luggageContainer.style.display = 'block';
        reportContainer.style.display = 'none';
        checkContainer.style.display = 'none';
        womenSafeContainer.style.display = 'none';
        confirmation.style.display = 'none';
        homeBtn.style.display = 'flex';
    }
    
    function showReportForm() {
        mainMenu.style.display = 'none';
        comfortContainer.style.display = 'none';
        luggageContainer.style.display = 'none';
        reportContainer.style.display = 'block';
        checkContainer.style.display = 'none';
        womenSafeContainer.style.display = 'none';
        confirmation.style.display = 'none';
        homeBtn.style.display = 'flex';
    }
    
    function showCheckForm() {
        mainMenu.style.display = 'none';
        comfortContainer.style.display = 'none';
        luggageContainer.style.display = 'none';
        reportContainer.style.display = 'none';
        checkContainer.style.display = 'block';
        womenSafeContainer.style.display = 'none';
        confirmation.style.display = 'none';
        homeBtn.style.display = 'flex';
        luggageResults.style.display = 'none';
    }
    
    function showWomenSafe() {
        mainMenu.style.display = 'none';
        comfortContainer.style.display = 'none';
        luggageContainer.style.display = 'none';
        reportContainer.style.display = 'none';
        checkContainer.style.display = 'none';
        womenSafeContainer.style.display = 'block';
        confirmation.style.display = 'none';
        homeBtn.style.display = 'flex';
        womenResults.style.display = 'none';
    }
    
    function showConfirmation(message) {
        mainMenu.style.display = 'none';
        comfortContainer.style.display = 'none';
        luggageContainer.style.display = 'none';
        reportContainer.style.display = 'none';
        checkContainer.style.display = 'none';
        womenSafeContainer.style.display = 'none';
        confirmation.style.display = 'block';
        homeBtn.style.display = 'flex';
        confirmationMessage.textContent = message;
        
        // Confetti effect
        for (let i = 0; i < 50; i++) {
            createConfetti();
        }
    }
    
    // Event listeners
    comfortBtn.addEventListener('click', showComfortForm);
    luggageBtn.addEventListener('click', showLuggageMenu);
    womenSafeBtn.addEventListener('click', showWomenSafe);
    trainInfoBtn.addEventListener('click', function() {
        alert("For real-time train information, please visit:\nhttps://enquiry.indianrail.gov.in/mntes/");
    });
    reportBtn.addEventListener('click', showReportForm);
    checkBtn.addEventListener('click', showCheckForm);
    homeBtn.addEventListener('click', showMainMenu);
    
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
    
    // Chatbot functionality
    let chatbotOpen = false;
    
    chatbotToggle.addEventListener('click', function() {
        chatbotOpen = !chatbotOpen;
        if (chatbotOpen) {
            chatbotContainer.classList.add('open');
            chatbotInput.focus();
            // Send welcome message if first time opening
            if (chatbotMessages.children.length === 0) {
                addBotMessage("Hello! I'm your Indian Railway Assistant. How can I help you today?");
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
    
    function handleUserInput() {
        const userInput = chatbotInput.value.trim();
        if (userInput === '') return;
        
        addUserMessage(userInput);
        chatbotInput.value = '';
        
        // Simple chatbot responses
        setTimeout(() => {
            const input = userInput.toLowerCase();
            
            if (input.includes('women') || input.includes('ladies') || input.includes('female')) {
                addBotMessage("Women-only coaches are usually located in the middle of the train. You can use our Women-Safe Coach feature to find the exact location at your station.");
            } 
            else if (input.includes('luggage') || input.includes('baggage')) {
                addBotMessage("You can check luggage space availability using our Luggage Space Checker feature. Passengers report space availability in real-time.");
            }
            else if (input.includes('comfort') || input.includes('clean')) {
                addBotMessage("Our Coach Comfort Meter allows you to rate and view ratings for train cleanliness, seat comfort, and noise levels.");
            }
            else if (input.includes('train status') || input.includes('running')) {
                addBotMessage("For real-time train running status, please visit: <a href='https://enquiry.indianrail.gov.in/mntes/' target='_blank'>Indian Railways Enquiry</a>");
            }
            else if (input.includes('pnr') || input.includes('ticket')) {
                addBotMessage("You can check your PNR status at: <a href='https://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html?locale=en' target='_blank'>PNR Status Check</a>");
            }
            else if (input.includes('station') || input.includes('platform')) {
                addBotMessage("Station information is available in our Women-Safe Coach feature. Select your station to see platform details.");
            }
            else if (input.includes('hello') || input.includes('hi')) {
                addBotMessage("Hello! How can I assist you with your Indian Railways journey today?");
            }
            else if (input.includes('thank')) {
                addBotMessage("You're welcome! Is there anything else I can help you with?");
            }
            else {
                addBotMessage("I'm sorry, I didn't understand that. I can help with women-safe coaches, luggage space, train comfort, and general railway information. Please try asking about one of these topics.");
            }
        }, 500);
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
    
    // Create initial background elements
    for (let i = 0; i < 3; i++) {
        setTimeout(createMovingTrain, i * 5000);
        setTimeout(createLuggageIcon, i * 3000);
        setTimeout(createHeartIcon, i * 4000);
    }
    
    // Continue creating them periodically
    setInterval(createMovingTrain, 15000);
    setInterval(createLuggageIcon, 8000);
    setInterval(createHeartIcon, 10000);
    
    // Initial welcome message
    setTimeout(() => {
        addBotMessage("Welcome to Indian Railway Comfort & Safety System! Type your question or select a feature from the main menu.");
    }, 1000);
});