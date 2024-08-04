export async function findLocation(ipAddress) {
  const apiKey = "at_kcTrKYVdMHl0BugSkUJfzR5it9Nev";

  if (ipAddress === "") {
    alert("Please enter an IP address");
    return;
  }

  const url = `https://geo.ipify.org/api/v2/country?apiKey=${apiKey}&ipAddress=${ipAddress}`;
  console.log("API URL:", url); // Debugging line

  try {
    const response = await fetch(url);
    console.log("Response:", response); // Debugging line

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Response Data:", data); // Debugging line

    displayLocation(data);
  } catch (error) {
    console.error("Error fetching the location:", error);
    alert("Error fetching the location. Please try again.");
  }
}

export function displayLocation(data) {
  const locationResult = document.getElementById("locationResult");
  if (data.location) {
    locationResult.innerHTML = `
            <p><strong>IP Address:</strong> ${data.ip}</p>
            <p><strong>Location:</strong> ${data.location.city}, ${data.location.region}, ${data.location.country}</p>
            <p><strong>Latitude:</strong> ${data.location.lat}</p>
            <p><strong>Longitude:</strong> ${data.location.lng}</p>
            <p><strong>Timezone:</strong> ${data.location.timezone}</p>
        `;
  } else {
    locationResult.innerHTML = "<p>Location not found.</p>";
  }
}
