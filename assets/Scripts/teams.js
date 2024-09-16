document.addEventListener('DOMContentLoaded', function () {
    const createTeamBtn = document.getElementById('create-team');
    const addMemberBtn = document.getElementById('add-member');
    const memberInputContainer = document.getElementById('member-input-container');
    const teamContainer = document.getElementById('team-container');
    const teamNameInput = document.getElementById('team-name');
    let teamMembers = [];  // Array to store team members' UIDs
    let memberCount = 1;   // To count the number of members being added

    // Function to add a new input field for member UID
    function addMemberInput() {
        const newMemberDiv = document.createElement('div');
        newMemberDiv.classList.add('member-input');
        newMemberDiv.innerHTML = `
            <input type="text" id="member-uid-${memberCount}" class="member-uid" placeholder="Enter member UID" value="UID${Math.floor(1000 + Math.random() * 9000)}" required>
        `;
        memberInputContainer.appendChild(newMemberDiv);
        memberCount++;
    }

    // Add a new member input section on clicking "Add Member"
    addMemberBtn.addEventListener('click', function () {
        addMemberInput();
    });

    // Add the first member input field by default when the page loads
    addMemberInput();

    // Create a team and display the members
    createTeamBtn.addEventListener('click', function () {
        const teamName = teamNameInput.value.trim();

        if (teamName === '') {
            alert('Please enter a team name');
            return;
        }

        teamMembers = [];  // Clear the array for fresh inputs

        // Collect UIDs from all the input fields
        document.querySelectorAll('.member-uid').forEach(inputField => {
            const memberUid = inputField.value.trim();
            if (memberUid !== '') {
                teamMembers.push(memberUid);
            }
        });

        if (teamMembers.length === 0) {
            alert('Please add at least one team member UID');
            return;
        }

        fetchTeamMemberDetails(teamMembers, teamName);
    });

    // Function to simulate fetching member details based on UID
    function fetchTeamMemberDetails(uids, teamName) {
        teamContainer.innerHTML = '';  // Clear previous content

        uids.forEach(uid => {
            // Simulate fetching data
            const memberData = getMemberDataByUID(uid);

            // Create a card for each member
            const memberCard = document.createElement('div');
            memberCard.classList.add('team-card');
            memberCard.innerHTML = `
                <h3>${teamName}</h3>
                <p><strong>Name:</strong> ${memberData.name}</p>
                <p><strong>Age:</strong> ${memberData.age}</p>
                <p><strong>Profession:</strong> ${memberData.profession}</p>
                <p><strong>UID:</strong> ${memberData.uid}</p>
                <p><strong>Place:</strong> ${memberData.place}</p>
            `;
            teamContainer.appendChild(memberCard);
        });

        // Hide the team creation form after team is created
        document.getElementById('team-creation').style.display = 'none';
    }

    // Simulated function to return member data based on UID
    function getMemberDataByUID(uid) {
        const sampleData = {
            'UID1234': { name: 'John Doe', age: 25, profession: 'Engineer', place: 'New York', uid: 'UID1234' },
            'UID5678': { name: 'Jane Smith', age: 30, profession: 'Doctor', place: 'London', uid: 'UID5678' },
            'UID9101': { name: 'Mike Johnson', age: 28, profession: 'Teacher', place: 'Sydney', uid: 'UID9101' }
        };

        // Fallback data for unknown UIDs
        return sampleData[uid] || { name: `Unknown User`, age: 0, profession: 'Unknown', place: 'Unknown', uid: uid };
    }
});
