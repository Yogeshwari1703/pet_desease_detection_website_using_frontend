// Comprehensive Pet Database
const petData = {
        dog: {
                breeds: ["Labrador Retriever", "German Shepherd", "Golden Retriever", "Bulldog", "Beagle", 
                        "Poodle", "Rottweiler", "Yorkshire Terrier", "Boxer", "Dachshund", "Mixed Breed"],
                symptoms: [
                    "Lethargy", "Loss of appetite", "Vomiting", "Diarrhea", "Excessive thirst",
                    "Weight loss", "Coughing", "Sneezing", "Itching", "Hair loss", 
                    "Red eyes", "Limping", "Difficulty breathing", "Seizures", "Aggression",
                    "Pale gums", "Bloated abdomen", "Excessive drooling", "Nasal discharge", "Fever",
                    "Dehydration", "Jaundice", "Increased urination", "Blood in stool", "Swollen joints",
                    "Head pressing", "Circling", "Incoordination", "Excessive panting", "Restlessness"
                ],
                lifeExpectancy: 13
            },
        cat: {
                breeds: ["Persian", "Maine Coon", "Siamese", "Ragdoll", "Bengal", 
                        "British Shorthair", "Abyssinian", "Sphynx", "Scottish Fold", "Russian Blue", "Domestic Shorthair"],
                symptoms: [
                    "Lethargy", "Loss of appetite", "Vomiting", "Diarrhea", "Hiding",
                    "Weight loss", "Coughing", "Sneezing", "Itching", "Hair loss", 
                    "Red eyes", "Limping", "Difficulty breathing", "Seizures", "Aggression",
                    "Pale gums", "Bloated abdomen", "Excessive grooming", "Nasal discharge", "Fever",
                    "Dehydration", "Jaundice", "Increased urination", "Blood in urine", "Overgrooming",
                    "Head tilting", "Excessive vocalization", "Straining to urinate", "Bad breath", "Drooling"
                ],
                lifeExpectancy: 15
            },
        bird: {
                breeds: ["Parakeet", "Cockatiel", "Lovebird", "Canary", "Finch", 
                        "Parrotlet", "Conure", "African Grey", "Macaw", "Cockatoo", "Budgerigar"],
                symptoms: [
                    "Fluffed feathers", "Loss of appetite", "Weight loss", "Sneezing",
                    "Nasal discharge", "Difficulty breathing", "Tail bobbing", "Lameness",
                    "Drooping wings", "Changes in droppings", "Feather plucking", "Lethargy",
                    "Discharge from eyes", "Swollen eyes", "Loss of voice", "Head tilting",
                    "Unbalanced posture", "Regurgitation", "Excessive sleeping", "Beak abnormalities",
                    "Wheezing", "Coughing", "Swollen joints", "Tremors", "Seizures",
                    "Blood in droppings", "Overgrown beak", "Overgrown nails", "Dull feathers", "Loss of balance"
                ],
                lifeExpectancy: 10
            },
        rabbit: {
                breeds: ["Holland Lop", "Mini Rex", "Netherland Dwarf", "Lionhead", 
                        "Flemish Giant", "Angora", "Mini Lop", "Dutch", "Californian", "Himalayan", "Dwarf Hotot"],
                symptoms: [
                    "Lethargy", "Loss of appetite", "Weight loss", "Diarrhea",
                    "Runny nose", "Sneezing", "Head tilt", "Overgrown teeth",
                    "Hair loss", "Red urine", "Skin sores", "Difficulty breathing",
                    "Not eating cecotropes", "Excessive scratching", "Lumps or bumps",
                    "Drooling", "Wet chin", "Abnormal feces", "Loud tooth grinding", "Collapse",
                    "Cloudy eyes", "Head shaking", "Ear discharge", "Hunched posture", "Swollen abdomen",
                    "Inability to urinate", "Blood in urine", "Pale mucous membranes", "Cold ears", "Rapid breathing"
                ],
                lifeExpectancy: 8
            },
        cow: {
                breeds: ["Holstein", "Jersey", "Guernsey", "Ayrshire", "Hereford"],
                symptoms: [
                        "Lethargy", "Loss of appetite", "Bloating", "Diarrhea", "Coughing",
                        "Nasal discharge", "Fever", "Limping", "Weight loss", "Abnormal milk production"
                        ],
                lifeExpectancy: 15
            },
        buffalo: {
                breeds: ["Murrah", "Nili-Ravi", "Jaffarabadi", "Surti"],
                symptoms: [
                        "Lethargy", "Loss of appetite", "Bloating", "Diarrhea", "Coughing",
                        "Nasal discharge", "Fever", "Limping", "Weight loss", "Abnormal milk production"
                    ],
                lifeExpectancy: 20
            },
        turtle: {
                breeds: ["Red-Eared Slider", "Painted Turtle", "Box Turtle", "Snapping Turtle"],
                symptoms: [
                    "Lethargy", "Loss of appetite", "Shell rot", "Swollen eyes", "Respiratory distress",
                    "Abnormal swimming", "Bloating", "Skin lesions", "Diarrhea"
                ],
                lifeExpectancy: 40
            },
        fish: {
                breeds: ["Goldfish", "Betta", "Guppy", "Tetra", "Cichlid"],
                symptoms: [
                    "Lethargy", "Loss of appetite", "Abnormal swimming", "Fins clamped", "White spots",
                    "Cloudy eyes", "Bloating", "Gasping at surface", "Skin lesions"
            ],
            lifeExpectancy: 5
        }

        };

        // Comprehensive Disease Database with Weighted Symptoms
        const diseaseDatabase = [
            // Dog Diseases
            {
                name: "Canine Parvovirus",
                commonIn: ["dog"],
                symptoms: [
                    {name: "Vomiting", weight: 0.9},
                    {name: "Diarrhea (often bloody)", weight: 0.9},
                    {name: "Lethargy", weight: 0.8},
                    {name: "Loss of appetite", weight: 0.8},
                    {name: "Fever", weight: 0.7},
                    {name: "Dehydration", weight: 0.7}
                ],
                severity: "severe",
                description: "Highly contagious viral illness that attacks the gastrointestinal system of puppies and dogs.",
                treatments: {
                    general: "Hospitalization with IV fluids, anti-nausea medications, antibiotics for secondary infections, and nutritional support.",
                    baby: "Puppies under 6 months are most vulnerable. Requires intensive care with plasma transfusions in severe cases. Mortality can reach 91% without treatment.",
                    senior: "Older dogs may have weaker immune response. Often need longer hospitalization (5-7 days) and have higher mortality rates."
                }
            },
            {
                name: "Canine Distemper",
                commonIn: ["dog"],
                symptoms: [
                    {name: "Nasal discharge", weight: 0.8},
                    {name: "Fever", weight: 0.8},
                    {name: "Coughing", weight: 0.7},
                    {name: "Lethargy", weight: 0.7},
                    {name: "Seizures", weight: 0.6},
                    {name: "Red eyes", weight: 0.5}
                ],
                severity: "severe",
                description: "Viral disease affecting multiple body systems with high mortality rates in unvaccinated dogs.",
                treatments: {
                    general: "Supportive care including IV fluids, antibiotics for secondary infections, anticonvulsants if needed, and nutritional support. No cure exists.",
                    baby: "Puppies are most susceptible. Requires intensive nursing care and isolation. Vaccination is the only reliable prevention.",
                    senior: "Older dogs may develop chronic neurological symptoms even if they survive the acute phase."
                }
            },
            
            // Cat Diseases
            {
                name: "Feline Upper Respiratory Infection",
                commonIn: ["cat"],
                symptoms: [
                    {name: "Sneezing", weight: 0.8},
                    {name: "Nasal discharge", weight: 0.8},
                    {name: "Watery eyes", weight: 0.7},
                    {name: "Fever", weight: 0.6},
                    {name: "Loss of appetite", weight: 0.6},
                    {name: "Coughing", weight: 0.5}
                ],
                severity: "moderate",
                description: "Common complex of viral and bacterial infections similar to a cold in humans.",
                treatments: {
                    general: "Antibiotics for bacterial components, eye ointments, nasal decongestants, and supportive care with fluids and appetite stimulants.",
                    baby: "Kittens may need nebulization and more aggressive treatment as they can deteriorate quickly.",
                    senior: "Older cats may need longer treatment and monitoring for secondary infections like pneumonia."
                }
            },
            {
                name: "Feline Lower Urinary Tract Disease (FLUTD)",
                commonIn: ["cat"],
                symptoms: [
                    {name: "Difficulty urinating", weight: 0.9},
                    {name: "Blood in urine", weight: 0.8},
                    {name: "Excessive licking of genitals", weight: 0.7},
                    {name: "Straining to urinate", weight: 0.8},
                    {name: "Urinating outside litter box", weight: 0.6}
                ],
                severity: "severe",
                description: "Group of conditions affecting the bladder and urethra, potentially life-threatening in male cats.",
                treatments: {
                    general: "Pain relief, anti-inflammatories, urinary catheterization if blocked, special diet, and increased water intake.",
                    baby: "Uncommon in kittens but requires immediate attention if symptoms appear.",
                    senior: "Older cats often need long-term management with prescription diets and regular monitoring."
                }
            },
            
            // Bird Diseases
            {
                name: "Psittacosis (Parrot Fever)",
                commonIn: ["bird"],
                symptoms: [
                    {name: "Difficulty breathing", weight: 0.9},
                    {name: "Nasal discharge", weight: 0.8},
                    {name: "Fluffed feathers", weight: 0.7},
                    {name: "Loss of appetite", weight: 0.7},
                    {name: "Weight loss", weight: 0.6},
                    {name: "Lethargy", weight: 0.6}
                ],
                severity: "severe",
                description: "Zoonotic bacterial infection caused by Chlamydia psittaci that can affect birds and humans.",
                treatments: {
                    general: "Antibiotics (doxycycline) for 45 days, isolation, environmental disinfection, and supportive care.",
                    baby: "Young birds often need supplemental feeding and closer monitoring due to rapid weight loss.",
                    senior: "Older birds may need longer treatment and supportive care due to weaker immune systems."
                }
            },
            {
                name: "Avian Gastric Yeast (Macrorhabdus)",
                commonIn: ["bird"],
                symptoms: [
                    {name: "Weight loss", weight: 0.9},
                    {name: "Regurgitation", weight: 0.8},
                    {name: "Undigested seeds in droppings", weight: 0.7},
                    {name: "Lethargy", weight: 0.6},
                    {name: "Fluffed feathers", weight: 0.5}
                ],
                severity: "moderate",
                description: "Fungal infection affecting the digestive tract, common in budgies and cockatiels.",
                treatments: {
                    general: "Antifungal medication (amphotericin B), probiotic support, and dietary changes to easily digestible foods.",
                    baby: "Young birds may need hand-feeding during treatment due to poor digestion.",
                    senior: "Older birds often have chronic cases requiring longer treatment periods."
                }
            },
            
            // Rabbit Diseases
            {
                name: "GI Stasis",
                commonIn: ["rabbit"],
                symptoms: [
                    {name: "Loss of appetite", weight: 0.9},
                    {name: "Lethargy", weight: 0.8},
                    {name: "Not eating cecotropes", weight: 0.7},
                    {name: "Abnormal feces", weight: 0.7},
                    {name: "Bloated abdomen", weight: 0.6},
                    {name: "Loud tooth grinding", weight: 0.5}
                ],
                severity: "severe",
                description: "Life-threatening condition where the digestive system slows or stops completely.",
                treatments: {
                    general: "Emergency vet care with motility drugs, pain medication, IV fluids, syringe feeding, and abdominal massage.",
                    baby: "Baby rabbits deteriorate rapidly - immediate vet care is critical with hourly monitoring.",
                    senior: "Often related to underlying dental issues - requires full dental exam and possible tooth trimming."
                }
            },
            {
                name: "Pasteurellosis (Snuffles)",
                commonIn: ["rabbit"],
                symptoms: [
                    {name: "Sneezing", weight: 0.8},
                    {name: "Nasal discharge", weight: 0.8},
                    {name: "Runny nose", weight: 0.7},
                    {name: "Watery eyes", weight: 0.6},
                    {name: "Head tilt", weight: 0.5},
                    {name: "Lethargy", weight: 0.5}
                ],
                severity: "moderate",
                description: "Bacterial respiratory infection that can become chronic if not treated properly.",
                treatments: {
                    general: "Long-term antibiotics (4-6 weeks), nasal flushes, environmental cleaning, and immune support.",
                    baby: "Young rabbits may need more aggressive treatment and supportive feeding.",
                    senior: "Older rabbits often have chronic cases requiring intermittent lifelong treatment."
                }
            },
            
            {
                name: "Bovine Respiratory Disease",
                commonIn: ["cow"],
                symptoms: [
                {name: "Coughing", weight: 0.9},
                {name: "Nasal discharge", weight: 0.8},
                {name: "Fever", weight: 0.7},
                {name: "Lethargy", weight: 0.7},
                {name: "Loss of appetite", weight: 0.6}
                ],
                severity: "severe",
                description: "Common respiratory disease in cattle, often caused by viral and bacterial infections.",
                treatments: {
                general: "Antibiotics, anti-inflammatories, and supportive care. Vaccination is key for prevention.",
                baby: "Calves are particularly susceptible and may require intensive care.",
                senior: "Older cows may have chronic respiratory issues requiring long-term management."
                }
            },
            {
                name: "Bloat",
                commonIn: ["cow"],
                symptoms: [
                {name: "Bloating", weight: 0.9},
                {name: "Lethargy", weight: 0.8},
                {name: "Loss of appetite", weight: 0.7},
                {name: "Abdominal pain", weight: 0.6}
                ],
                severity: "severe",
                description: "A potentially life-threatening condition where the stomach fills with gas.",
                treatments: {
                general: "Immediate veterinary intervention is required. May involve passing a tube or surgery.",
                baby: "Calves can deteriorate quickly and require urgent care.",
                senior: "Older cows may have underlying issues that predispose them to bloat."
                }
            }
        ];

        // DOM elements
        const petTypeSelect = document.getElementById('pet-type');
        const petBreedSelect = document.getElementById('pet-breed');
        const symptomsContainer = document.getElementById('symptoms-container');
        const symptomSearch = document.getElementById('symptom-search');
        const predictBtn = document.getElementById('predict-btn');
        const loadingDiv = document.getElementById('loading');
        const resultContainer = document.getElementById('result-container');
        const resultsList = document.getElementById('results-list');
        const petAgeInput = document.getElementById('pet-age');
        const ageUnitSelect = document.getElementById('age-unit');
        const lifeStageSelect = document.getElementById('life-stage');

        // Initialize the page
        petTypeSelect.addEventListener('change', updatePetSelections);
        symptomSearch.addEventListener('input', filterSymptoms);
        predictBtn.addEventListener('click', analyzeSymptoms);
        petAgeInput.addEventListener('input', updateLifeStage);
        ageUnitSelect.addEventListener('change', updateLifeStage);

        function updatePetSelections() {
            const petType = petTypeSelect.value;
            
            // Update breeds
            if (petType && petData[petType]) {
                petBreedSelect.disabled = false;
                petBreedSelect.innerHTML = '<option value="">Select breed</option>';
                petData[petType].breeds.forEach(breed => {
                    petBreedSelect.innerHTML += `<option value="${breed}">${breed}</option>`;
                });
                
                // Update symptoms
                updateSymptomsList(petType);
            } else {
                petBreedSelect.disabled = true;
                petBreedSelect.innerHTML = '<option value="">Please select pet type first</option>';
                symptomsContainer.innerHTML = '';
            }
            
            resultContainer.style.display = 'none';
            updateLifeStage();
        }

        function updateSymptomsList(petType) {
            symptomsContainer.innerHTML = '';
            petData[petType].symptoms.forEach(symptom => {
                const checkbox = document.createElement('div');
                checkbox.className = 'symptom-checkbox';
                checkbox.innerHTML = `
                    <input type="checkbox" id="sym-${symptom.toLowerCase().replace(/\s+/g, '-')}" value="${symptom}">
                    <label for="sym-${symptom.toLowerCase().replace(/\s+/g, '-')}">${symptom}</label>
                `;
                symptomsContainer.appendChild(checkbox);
            });
        }

        function filterSymptoms() {
            const searchTerm = symptomSearch.value.toLowerCase();
            const checkboxes = symptomsContainer.querySelectorAll('.symptom-checkbox');
            
            checkboxes.forEach(checkbox => {
                const label = checkbox.querySelector('label');
                const text = label.textContent.toLowerCase();
                checkbox.style.display = text.includes(searchTerm) ? 'flex' : 'none';
            });
        }

        function getSelectedSymptoms() {
            const checkboxes = symptomsContainer.querySelectorAll('input[type="checkbox"]:checked');
            return Array.from(checkboxes).map(cb => cb.value);
        }

        function updateLifeStage() {
            const petType = petTypeSelect.value;
            const age = parseFloat(petAgeInput.value);
            const unit = ageUnitSelect.value;
            
            if (!petType || isNaN(age) || age <= 0) {
                lifeStageSelect.value = '';
                return;
            }
            
            // Convert to years if needed
            let ageInYears = age;
            if (unit === 'months') {
                ageInYears = age / 12;
            }
            
            // Determine life stage based on pet's typical lifespan
            const lifeExpectancy = petData[petType]?.lifeExpectancy || 10;
            const lifeFraction = ageInYears / lifeExpectancy;
            
            if (lifeFraction < 0.08) { // ~1 year for most pets
                lifeStageSelect.value = 'baby';
            } else if (lifeFraction < 0.25) { // ~1-3 years
                lifeStageSelect.value = 'young';
            } else if (lifeFraction < 0.7) { // ~3-8 years
                lifeStageSelect.value = 'adult';
            } else {
                lifeStageSelect.value = 'senior';
            }
        }

        function analyzeSymptoms() {
            const petType = petTypeSelect.value;
            const selectedSymptoms = getSelectedSymptoms();
            
            // Validate inputs
            if (!petType) {
                alert("Please select your pet type");
                return;
            }
            
            if (selectedSymptoms.length < 1) {
                alert("Please select at least one symptom");
                return;
            }
            
            // Show loading
            loadingDiv.style.display = 'block';
            resultContainer.style.display = 'none';
            
            // Simulate analysis delay
            setTimeout(() => {
                // Hide loading
                loadingDiv.style.display = 'none';
                
                // Find matching diseases with scores
                const results = findMatchingDiseases(petType, selectedSymptoms);
                
                // Display results
                displayResults(results, petType);
                
                // Show result container
                resultContainer.style.display = 'block';
            }, 1000);
        }

        function findMatchingDiseases(petType, selectedSymptoms) {
            const results = [];
            
            diseaseDatabase.forEach(disease => {
                // Skip if disease is not for this pet type
                if (!disease.commonIn.includes(petType)) return;
                
                let score = 0;
                let matchedSymptoms = [];
                
                // Check each symptom in disease against selected symptoms
                disease.symptoms.forEach(symptom => {
                    if (selectedSymptoms.includes(symptom.name)) {
                        score += symptom.weight;
                        matchedSymptoms.push(symptom.name);
                    }
                });
                
                // Calculate match percentage (0-100)
                const totalPossible = disease.symptoms.reduce((sum, s) => sum + s.weight, 0);
                const matchPercent = Math.round((score / totalPossible) * 100);
                
                if (matchPercent >= 40) { // Only show diseases with at least 40% match
                    results.push({
                        disease: disease,
                        matchPercent: matchPercent,
                        matchedSymptoms: matchedSymptoms
                    });
                }
            });
            
            // Sort by best matches first
            results.sort((a, b) => b.matchPercent - a.matchPercent);
            
            return results;
        }

        function displayResults(results, petType) {
            resultsList.innerHTML = '';
            
            if (results.length === 0) {
                resultsList.innerHTML = `
                    <div class="disease-item">
                        <p>No specific conditions identified with high confidence.</p>
                        <p><strong>Recommendations:</strong></p>
                        <ul>
                            <li>Monitor your pet closely for any changes</li>
                            <li>Ensure they're drinking water</li>
                            <li>Contact your veterinarian if symptoms persist or worsen</li>
                        </ul>
                    </div>
                `;
                return;
            }
            
            // Get pet's life stage for age-specific advice
            const age = parseFloat(petAgeInput.value);
            const unit = document.getElementById('age-unit').value;
            let lifeStage = 'general';
            
            if (!isNaN(age) && age > 0) {
                const ageInYears = unit === 'months' ? age / 12 : age;
                lifeStage = ageInYears < 1 ? 'baby' : ageInYears > 8 ? 'senior' : 'general';
            }
            
            // Display each result
            results.forEach(result => {
                const disease = result.disease;
                const item = document.createElement('div');
                item.className = `disease-item ${disease.severity === 'severe' ? 'emergency' : ''}`;
                
                // Severity indicator
                let severityBadge = '';
                if (disease.severity === 'minor') {
                    severityBadge = '<span class="severity-indicator severity-minor"></span>Minor';
                } else if (disease.severity === 'moderate') {
                    severityBadge = '<span class="severity-indicator severity-moderate"></span>Moderate';
                } else {
                    severityBadge = '<span class="severity-indicator severity-severe"></span>Emergency';
                }
                
                // Treatment based on life stage
                const treatment = disease.treatments[lifeStage] || disease.treatments.general;
                
                item.innerHTML = `
                    <div class="disease-name">
                        ${disease.name} 
                        <span class="match-score">${result.matchPercent}% match</span>
                        <span style="float: right;">${severityBadge}</span>
                    </div>
                    <p>${disease.description}</p>
                    <p><strong>Matching symptoms:</strong> ${result.matchedSymptoms.join(', ')}</p>
                    <div class="treatment-info">
                        <p><strong>Recommended Treatment:</strong></p>
                        <p>${treatment}</p>
                        ${lifeStage !== 'general' ? `<p class="age-note">(Tailored for ${lifeStage} pets)</p>` : ''}
                    </div>
                    ${disease.severity === 'severe' ? 
                        '<button class="btn contact-btn" style="margin-top: 10px;">Contact Veterinarian Immediately</button>' : ''}
                `;
                
                resultsList.appendChild(item);
            });
            
            // Add event listeners to contact buttons
            document.querySelectorAll('.contact-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    alert("In a real application, this would connect you to an emergency veterinary service.");
                });
            });
        }