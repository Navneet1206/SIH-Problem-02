document.getElementById("wasteRequestForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect all form data
    const propertyInfo = {
        streetNumber: document.getElementById("streetNumber").value,
        streetName: document.getElementById("streetName").value,
        state: document.getElementById("state").value,
        unitNo: document.getElementById("unitNo").value,
        postalCode: document.getElementById("postalCode").value,
        accountNumber: document.getElementById("accountNumber").value
    };

    const applicantInfo = {
        name: document.getElementById("name").value,
        telephone: document.getElementById("telephone").value,
        email: document.getElementById("email").value,
        date: document.getElementById("date").value
    };

    const mailingAddress = {
        streetNumber: document.getElementById("mailStreetNumber").value,
        streetName: document.getElementById("mailStreetName").value,
        state: document.getElementById("mailState").value,
        city: document.getElementById("mailCity").value,
        postalCode: document.getElementById("mailPostalCode").value
    };

    // Check selected waste type
    const wasteTypes = [];
    if (document.getElementById("Municipal Solid Waste").checked) {
        wasteTypes.push("Municipal Solid Waste");
    }
    if (document.getElementById("Industrial Solid Waste").checked) {
        wasteTypes.push("Industrial Solid Waste");
    }
    if (document.getElementById("Agricultural Waste and Residues (AWR)").checked) {
        wasteTypes.push("Agricultural Waste and Residues (AWR)");
    }
    if (document.getElementById("Hazardous Waste").checked) {
        wasteTypes.push("Hazardous Waste");
    }



    // Create a final request object
    const requestData = {
        propertyInfo: propertyInfo,
        applicantInfo: applicantInfo,
        mailingAddress: mailingAddress,
        wasteTypes: wasteTypes
    };

    // Log data to console (this is where you can submit the form data)
    console.log(requestData);
    alert("Request Submitted Successfully!");
});
 // Get the modal and buttons
 var modal = document.getElementById("formModal");
 var btn = document.getElementById("openModalBtn");
 var closeBtn = document.getElementById("closeModal");

 // Open the modal
 btn.onclick = function() {
     modal.style.display = "block";
 }

 // Close the modal
 closeBtn.onclick = function() {
     modal.style.display = "none";
 }

 // Close the modal when clicking outside of the modal content
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }
 document.getElementById("carddegine").addEventListener("submit", function (event) {
    event.preventDefault();
 })