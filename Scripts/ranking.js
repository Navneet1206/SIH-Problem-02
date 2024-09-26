document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('nameInput');
    const scoreInput = document.getElementById('scoreInput');
    const categorySelect = document.getElementById('categorySelect');
    const stateSelect = document.getElementById('stateSelect');
    const districtSelect = document.getElementById('districtSelect');
    const rankTableBody = document.querySelector('#rankTable tbody');

    // Sample ranks data with 25 examples
    let ranks = [
        { name: 'Team Alpha', score: 100, category: 'India' },
        { name: 'Team Bravo', score: 98, category: 'State', state: 'Goa' },
        { name: 'Team Charlie', score: 95, category: 'District', state: 'Bihar', district: 'Patna' },
        { name: 'Team Delta', score: 90, category: 'India' },
        { name: 'Team Echo', score: 88, category: 'State', state: 'Uttar Pradesh' },
        { name: 'Team Foxtrot', score: 85, category: 'District', state: 'Andhra Pradesh', district: 'Chittoor' },
        { name: 'Team Golf', score: 82, category: 'India' },
        { name: 'Team Hotel', score: 80, category: 'State', state: 'Maharashtra' },
        { name: 'Team India', score: 78, category: 'District', state: 'Tamil Nadu', district: 'Chennai' },
        { name: 'Team Juliet', score: 75, category: 'India' },
        { name: 'Team Kilo', score: 73, category: 'State', state: 'Punjab' },
        { name: 'Team Lima', score: 70, category: 'District', state: 'Goa', district: 'North Goa' },
        { name: 'Team Mike', score: 68, category: 'India' },
        { name: 'Team November', score: 65, category: 'State', state: 'Kerala' },
        { name: 'Team Oscar', score: 63, category: 'District', state: 'Bihar', district: 'Gaya' },
        { name: 'Team Papa', score: 60, category: 'India' },
        { name: 'Team Quebec', score: 58, category: 'State', state: 'Rajasthan' },
        { name: 'Team Romeo', score: 55, category: 'District', state: 'Madhya Pradesh', district: 'Bhopal' },
        { name: 'Team Sierra', score: 53, category: 'India' },
        { name: 'Team Tango', score: 50, category: 'State', state: 'Assam' },
        { name: 'Team Uniform', score: 48, category: 'District', state: 'Goa', district: 'South Goa' },
        { name: 'Team Victor', score: 45, category: 'India' },
        { name: 'Team Whiskey', score: 43, category: 'State', state: 'West Bengal' },
        { name: 'Team X-ray', score: 40, category: 'District', state: 'Tamil Nadu', district: 'Coimbatore' },
        { name: 'Team Yankee', score: 38, category: 'India' }
    ];

    // Disable other inputs when one is selected
    function disableOtherSearchInputs(disabledInput) {
        const inputs = [nameInput, scoreInput, stateSelect, districtSelect];
        inputs.forEach(input => {
            if (input !== disabledInput) {
                input.disabled = true;
            }
        });
    }

    // Enable search options if none are selected
    function enableAllSearchInputs() {
        nameInput.disabled = false;
        scoreInput.disabled = false;
        stateSelect.disabled = false;
        districtSelect.disabled = false;
    }

    nameInput.addEventListener('input', () => {
        if (nameInput.value.trim() !== '') {
            disableOtherSearchInputs(nameInput);
        } else {
            enableAllSearchInputs();
        }
    });

    scoreInput.addEventListener('input', () => {
        if (scoreInput.value.trim() !== '') {
            disableOtherSearchInputs(scoreInput);
        } else {
            enableAllSearchInputs();
        }
    });

    districtSelect.addEventListener('change', () => {
        if (districtSelect.value.trim() !== '') {
            disableOtherSearchInputs(districtSelect);
        } else {
            enableAllSearchInputs();
        }
    });

    // Function to render the table with ranks
    function renderTable() {
        rankTableBody.innerHTML = '';
        ranks.sort((a, b) => b.score - a.score); // Sort by score (descending)

        ranks.forEach((rank, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${rank.name}</td>
                <td>${rank.score}</td>
                <td>${rank.category} ${rank.state ? '- ' + rank.state : ''} ${rank.district ? '- ' + rank.district : ''}</td>
            `;
            rankTableBody.appendChild(row);
        });
    }

    // Initial rendering
    renderTable();
});
