document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // Render feature cards
    const featuresData = [
        {
            icon: 'database',
            title: 'Dynamic Knowledge Graphs',
            description: 'Build and maintain evolving knowledge structures that adapt to new information in real-time.'
        },
        {
            icon: 'brain',
            title: 'AI-Powered Analysis',
            description: 'Leverage advanced machine learning algorithms for intelligent data processing and pattern recognition.'
        },
        {
            icon: 'shield',
            title: 'Confidence Scoring',
            description: 'Our unique confidence scoring system ensures reliable and trustworthy knowledge representation.'
        }
    ];

    const featuresGrid = document.getElementById('featuresGrid');
    featuresData.forEach(feature => {
        const featureCard = createFeatureCard(feature);
        featuresGrid.appendChild(featureCard);
    });

    // Render job cards
    const jobsData = [
        {
            title: 'Senior Graph Database Engineer',
            location: 'Remote Worldwide',
            type: 'Full-time',
            description: 'Help build our next-generation graph database engine and scaling solutions.',
            timezone: 'Any timezone'
        },
        {
            title: 'AI/ML Research Scientist',
            location: 'Remote Worldwide',
            type: 'Full-time',
            description: 'Research and implement novel approaches to knowledge graph construction and confidence scoring.',
            timezone: 'Any timezone'
        },
        {
            title: 'Frontend Developer',
            location: 'Remote Worldwide',
            type: 'Full-time',
            description: 'Create intuitive interfaces for complex graph visualization and interaction.',
            timezone: 'Any timezone'
        },
        {
            title: 'DevOps Engineer',
            location: 'Remote Worldwide',
            type: 'Full-time',
            description: 'Build and maintain our cloud infrastructure and deployment pipelines.',
            timezone: 'Any timezone'
        }
    ];

    const jobList = document.getElementById('jobList');
    jobsData.forEach(job => {
        const jobCard = createJobCard(job);
        jobList.appendChild(jobCard);
    });
});

function createFeatureCard({ icon, title, description }) {
    const card = document.createElement('div');
    card.className = 'bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors';
    card.innerHTML = `
        <div class="mb-4"><i data-lucide="${icon}" class="h-8 w-8 text-blue-500"></i></div>
        <h3 class="text-xl font-bold mb-2">${title}</h3>
        <p class="text-gray-400">${description}</p>
    `;
    return card;
}

function createJobCard({ title, location, type, description, timezone }) {
    const card = document.createElement('div');
    card.className = 'bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors';
    card.innerHTML = `
        <div class="flex flex-col space-y-4">
            <div class="flex justify-between items-start">
                <h4 class="text-xl font-bold">${title}</h4>
                <button class="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors text-sm">
                    Apply Now
                </button>
            </div>
            <p class="text-gray-400">${description}</p>
            <div class="flex flex-wrap gap-4 text-sm text-gray-400">
                <span class="flex items-center space-x-1">
                    <i data-lucide="map-pin" class="h-4 w-4"></i>
                    <span>${location}</span>
                </span>
                <span class="flex items-center space-x-1">
                    <i data-lucide="briefcase" class="h-4 w-4"></i>
                    <span>${type}</span>
                </span>
                <span class="flex items-center space-x-1">
                    <i data-lucide="globe" class="h-4 w-4"></i>
                    <span>${timezone}</span>
                </span>
            </div>
        </div>
    `;
    return card;
}