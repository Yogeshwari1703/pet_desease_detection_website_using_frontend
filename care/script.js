  // ===== ANIMAL DATA =====
    const animals = [
 
  {
        name: "Dog",
        type: "Pet",
        image: "https://images.pexels.com/photos/1189673/pexels-photo-1189673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        tips: [
          "Daily exercise (30-60 minutes based on breed)",
          "Brush teeth 2-3 times weekly",
          "Regular grooming (frequency depends on coat type)",
          "Mental stimulation with puzzle toys",
          "Annual vet checkups with blood work"
        ],
        diseases: [
          { name: "Parvovirus", detectCode: "PARV-DOG-01" },
          { name: "Kennel Cough", detectCode: "KENN-DOG-02" },
          { name: "Lyme Disease", detectCode: "LYME-DOG-03" }
        ],
        vaccinations: [
          "Rabies - Yearly or every 3 years (by law)",
          "DHPP (Distemper combo) - Yearly",
          "Leptospirosis - Annually in endemic areas"
        ],
        emergencyContacts: [
          "ASPCA Poison Control: (888) 426-4435",
          "Local Emergency Vet: City Animal Hospital (555-6789)"
        ]
      },
      {
  
    name: "Cow",
    type: "Livestock",
    image: "https://images.pexels.com/photos/2581435/pexels-photo-2581435.jpeg",
    tips: [
      "Provide 20-30 gallons of fresh water daily",
      "Feed high-quality hay (2-3% of body weight)",
      "Maintain clean, dry bedding",
      "Regular hoof trimming every 6-8 weeks",
      "Watch for signs of mastitis (swollen udder, abnormal milk)"
    ],
    diseases: [
      { name: "Mastitis", detectCode: "MAST-COW-01" },
      { name: "Foot Rot", detectCode: "FOOT-COW-02" },
      { name: "Bovine Respiratory Disease", detectCode: "BRD-COW-03" }
    ],
    vaccinations: [
      "BVD (Bovine Viral Diarrhea) - Annually",
      "IBR (Infectious Bovine Rhinotracheitis) - Annually",
      "Blackleg - 6 months then booster"
    ],
    emergencyContacts: [
      "Local Large Animal Vet: Dr. Smith (555-1234)",
      "24/7 Livestock Emergency: 1-800-LIVESTOCK"
    ]
  },

  
  {
    name: "Buffalo",
    type: "Livestock",
    image: "https://th.bing.com/th/id/OIP.BqUFJrEog58INlBtCFTjTQAAAA?rs=1&pid=ImgDetMain",
    tips: [
      "Provide wallowing area for temperature regulation",
      "Feed 3-4% of body weight in green fodder daily",
      "Supplement with mineral mixtures",
      "Regular deworming every 3 months",
      "Check for ticks under ears and tail base"
    ],
    diseases: [
      { name: "Hemorrhagic Septicemia", detectCode: "HEMO-BUF-01" },
      { name: "Foot and Mouth Disease", detectCode: "FMD-BUF-02" },
      { name: "Brucellosis", detectCode: "BRUC-BUF-03" }
    ],
    vaccinations: [
      "Hemorrhagic Septicemia - Annually before monsoon",
      "Foot and Mouth Disease - Every 6 months",
      "Black Quarter - Yearly in endemic areas"
    ],
    emergencyContacts: [
      "State Animal Husbandry Dept: 1800-123-4567",
      "Buffalo Research Center: 555-2468"
    ]
  },

 
  {
    name: "Turtle",
    type: "Reptile",
    image: "https://images.pexels.com/photos/8647945/pexels-photo-8647945.jpeg",
    tips: [
      "Maintain water temperature 75-85°F (species dependent)",
      "Provide UVB lighting for 10-12 hours daily",
      "Clean tank weekly (25% water change)",
      "Feed varied diet (plants + protein)",
      "Provide basking area with dry platform"
    ],
    diseases: [
      { name: "Shell Rot", detectCode: "SHEL-TUR-01" },
      { name: "Respiratory Infection", detectCode: "RESP-TUR-02" },
      { name: "Vitamin A Deficiency", detectCode: "VITA-TUR-03" }
    ],
    vaccinations: [
      "No standard vaccinations required",
      "Annual fecal exam for parasites recommended"
    ],
    emergencyContacts: [
      "Exotic Vet Network: 555-3698",
      "Turtle Rescue Hotline: 1-800-TURTLE"
    ]
  },

 
  {
    name: "Fish",
    type: "Aquatic",
    image: "http://cdn.sheknows.com/articles/2014/05/Mike_C/ChefMom/Goldfish2.jpg",
    tips: [
      "Change 25% water weekly (use dechlorinator)",
      "Don't overfeed (only what they eat in 2 mins)",
      "Maintain stable pH (6.5-7.5 for most species)",
      "Quarantine new fish for 2 weeks",
      "Test water parameters (ammonia, nitrites) monthly"
    ],
    diseases: [
      { name: "Ich (White Spot)", detectCode: "ICH-FISH-01" },
      { name: "Fin Rot", detectCode: "FIN-FISH-02" },
      { name: "Dropsy", detectCode: "DROP-FISH-03" }
    ],
    vaccinations: [
      "Not typically vaccinated",
      "Use quarantine tank for new arrivals"
    ],
    emergencyContacts: [
      "Aquatic Vet: Dr. Fisher (555-1357)",
      "Fish Disease Hotline: 1-888-FISH-911"
    ]
  },

  
  {
    name: "Cat",
    type: "Pet",
    image: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tips: [
      "Provide multiple scratching posts",
      "Clean litter box daily",
      "Brush weekly (daily for long-haired breeds)",
      "Keep indoors to extend lifespan",
      "Annual vet checkups with blood work"
    ],
    diseases: [
      { name: "Feline Leukemia", detectCode: "FELV-CAT-01" },
      { name: "FIV", detectCode: "FIV-CAT-02" },
      { name: "Upper Respiratory Infection", detectCode: "URI-CAT-03" }
    ],
    vaccinations: [
      "FVRCP (core vaccine) - Yearly",
      "Rabies - As required by law",
      "FeLV - For outdoor cats"
    ],
    emergencyContacts: [
      "Pet Poison Helpline: (855) 764-7661",
      "Feline Emergency Clinic: 555-7890"
    ]
  },


  {
    name: "Birds",
    type: "Avian",
    image: "https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tips: [
      "Cage should be 2x wingspan minimum",
      "Daily out-of-cage time (2-4 hours)",
      "Avoid avocado, chocolate, caffeine",
      "Provide foraging toys for mental stimulation",
      "Night cover for 10-12 hours sleep"
    ],
    diseases: [
      { name: "Psittacosis", detectCode: "PSIT-BIRD-01" },
      { name: "Avian Gastric Yeast", detectCode: "AGY-BIRD-02" },
      { name: "Feather Plucking", detectCode: "PLUCK-BIRD-03" }
    ],
    vaccinations: [
      "Polyomavirus - For susceptible species",
      "Psittacosis - If in multi-bird household"
    ],
    emergencyContacts: [
      "Avian Vet: Dr. Wings (555-3579)",
      "Bird Rescue: 1-800-SAVE-BIRD"
    ]
  },


  {
    name: "Rabbit",
    type: "Small Pet",
    image: "https://images.pexels.com/photos/21198651/pexels-photo-21198651/free-photo-of-head-of-white-rabbit.jpeg",
    tips: [
      "Unlimited timothy hay (80% of diet)",
      "1 cup fresh veggies per 2 lbs body weight",
      "Avoid iceberg lettuce (no nutritional value)",
      "Provide chew toys for dental health",
      "Spay/neuter to prevent cancers"
    ],
    diseases: [
      { name: "GI Stasis", detectCode: "GI-RAB-01" },
      { name: "Pasteurellosis", detectCode: "PAST-RAB-02" },
      { name: "E. Cuniculi", detectCode: "ECUN-RAB-03" }
    ],
    vaccinations: [
      "RHDV2 - Annually in endemic areas",
      "Myxomatosis - Where prevalent"
    ],
    emergencyContacts: [
      "Rabbit Savvy Vet: 555-2468",
      "House Rabbit Society: 1-888-592-2287"
    ]
  },

];

    // ===== INITIALIZE PAGE =====
    document.addEventListener('DOMContentLoaded', () => {
      renderAnimals(animals);
      
      // Search functionality
      document.getElementById('search').addEventListener('input', (e) => {
        filterAnimals(e.target.value);
      });
    });

    // ===== RENDER ANIMAL CARDS =====
    function renderAnimals(animalsToRender) {
      const grid = document.getElementById('animalGrid');
      grid.innerHTML = '';
      
      if (animalsToRender.length === 0) {
        grid.innerHTML = '<p class="text-center" style="grid-column:1/-1">No animals found. Try a different search.</p>';
        return;
      }
      
      animalsToRender.forEach(animal => {
        const card = document.createElement('div');
        card.className = 'animal-card';
        card.innerHTML = `
          <img src="${animal.image}" alt="${animal.name}" class="animal-img">
          <div class="animal-info">
            <h3 class="animal-name">${animal.name}</h3>
            <span class="animal-type">${animal.type}</span>
            <p class="quick-tip">${animal.tips[0].substring(0, 60)}...</p>
          </div>
        `;
        card.addEventListener('click', () => openModal(animal));
        grid.appendChild(card);
      });
    }

    // ===== FILTER ANIMALS =====
    function filterAnimals(searchTerm) {
      const term = searchTerm.toLowerCase();
      const filtered = animals.filter(animal => 
        animal.name.toLowerCase().includes(term) || 
        animal.type.toLowerCase().includes(term)
      );
      renderAnimals(filtered);
    }

    // ===== OPEN MODAL =====
    function openModal(animal) {
      const modal = document.getElementById('careModal');
      
      // Set header info
      document.getElementById('modalTitle').textContent = `${animal.name} Care Guide`;
      document.getElementById('modalSubtitle').textContent = animal.type;
      
      // Render care tips
      const tipsContainer = document.getElementById('modalTips');
      tipsContainer.innerHTML = '';
      animal.tips.forEach(tip => {
        const tipElement = document.createElement('p');
        tipElement.className = 'care-tip';
        tipElement.innerHTML = `<i class="fas fa-check-circle" style="color:#667eea; margin-right:8px;"></i> ${tip}`;
        tipsContainer.appendChild(tipElement);
      });
      
      // Render diseases
      const diseaseList = document.getElementById('diseaseList');
      diseaseList.innerHTML = '';
      animal.diseases.forEach(disease => {
        const item = document.createElement('li');
        item.className = 'disease-item';
        item.innerHTML = `
          <span>${disease.name}</span>
          <button class="detect-btn" onclick="alert('Running detection for ${disease.name} (Code: ${disease.detectCode})')">
            <i class="fas fa-search"></i> Detect
          </button>
        `;
        diseaseList.appendChild(item);
      });
      
      // Render vaccinations
      const vaccineInfo = document.getElementById('vaccinationInfo');
      vaccineInfo.innerHTML = '<ul style="padding-left:1.2rem;">' + 
        animal.vaccinations.map(v => `<li>${v}</li>`).join('') + '</ul>';
      
      // Render emergency contacts
      const emergencyContacts = document.getElementById('emergencyContacts');
      emergencyContacts.innerHTML = animal.emergencyContacts
        .map(c => `<p class="contact-item"><i class="fas fa-phone-alt"></i> ${c}</p>`)
        .join('');
      
      // Show modal
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }

    // ===== CLOSE MODAL =====
    function closeModal() {
      document.getElementById('careModal').style.display = 'none';
      document.body.style.overflow = 'auto';
    }

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
      if (e.target === document.getElementById('careModal')) {
        closeModal();
      }
    });