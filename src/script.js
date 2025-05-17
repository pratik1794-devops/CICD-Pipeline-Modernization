document.addEventListener('DOMContentLoaded', () => {
    const deploymentInfo = document.getElementById('deployment-info');
    const refreshBtn = document.getElementById('refresh-btn');
    
    // Fetch deployment information
    const fetchDeploymentInfo = async () => {
        try {
            const response = await fetch('/api/deployment');
            const data = await response.json();
            
            deploymentInfo.innerHTML = `
                <strong>Environment:</strong> ${data.environment}<br>
                <strong>Version:</strong> ${data.version}<br>
                <strong>Last Deployed:</strong> ${new Date(data.deployedAt).toLocaleString()}<br>
                <strong>Build Number:</strong> ${data.buildNumber}
            `;
        } catch (error) {
            deploymentInfo.innerHTML = 'Could not fetch deployment information.';
            console.error('Error fetching deployment info:', error);
        }
    };
    
    // Initial load
    fetchDeploymentInfo();
    
    // Refresh button click handler
    refreshBtn.addEventListener('click', fetchDeploymentInfo);
});