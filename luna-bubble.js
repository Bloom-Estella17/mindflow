// Luna Bubble - Bulle flottante élégante pour MindFlow
(function() {
  // Créer la bulle Luna
  const lunaBubble = document.createElement('div');
  lunaBubble.id = 'luna-bubble';
  lunaBubble.innerHTML = '🌙';
  
  // Ajouter au body
  document.body.appendChild(lunaBubble);
  
  // Créer le modal Luna
  const lunaModal = document.createElement('div');
  lunaModal.id = 'luna-modal';
  lunaModal.innerHTML = `
    <div class="luna-modal-overlay" onclick="closeLunaModal()"></div>
    <div class="luna-modal-content">
      <div class="luna-modal-header">
        <div class="luna-avatar">🌙</div>
        <div class="luna-name">Luna</div>
        <div class="luna-close" onclick="closeLunaModal()">×</div>
      </div>
      <div class="luna-modal-body">
        <div class="luna-message">
          <p style="font-size: 18px; font-weight: 600; color: #8B7EB8; margin-bottom: 15px;">Bientôt disponible ! 💜</p>
          <p style="font-size: 15px; color: #666; line-height: 1.7; margin-bottom: 20px;">
            Luna, ton compagnon IA empathique 24/7, sera bientôt là pour t'accompagner dans ton parcours de bien-être mental.
          </p>
          <div style="background: rgba(139, 126, 184, 0.08); padding: 20px; border-radius: 15px; border-left: 4px solid #8B7EB8;">
            <p style="font-size: 14px; color: #666; line-height: 1.6; margin: 0;">
              <strong style="color: #8B7EB8;">💬 Écoute empathique</strong><br>
              Luna sera toujours là pour t'écouter sans jugement
              <br><br>
              <strong style="color: #8B7EB8;">🧠 Compréhension</strong><br>
              Spécialisée en santé mentale et troubles psychologiques
              <br><br>
              <strong style="color: #8B7EB8;">🌙 Disponible 24/7</strong><br>
              Présente quand tu en as besoin, jour et nuit
            </p>
          </div>
          <p style="font-size: 13px; color: #999; margin-top: 20px; text-align: center; font-style: italic;">
            Luna arrive en V1.1 ! Merci de ta patience 💚
          </p>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(lunaModal);
  
  // Event listener pour ouvrir le modal
  lunaBubble.addEventListener('click', function() {
    document.getElementById('luna-modal').classList.add('show');
  });
  
  // Fonction pour fermer le modal
  window.closeLunaModal = function() {
    document.getElementById('luna-modal').classList.remove('show');
  };
  
  // Ajouter les styles
  const style = document.createElement('style');
  style.textContent = `
    #luna-bubble {
      position: fixed;
      bottom: 90px;
      right: 20px;
      width: 70px;
      height: 70px;
      background: linear-gradient(135deg, #8B7EB8 0%, #B8A7D5 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 35px;
      cursor: pointer;
      z-index: 999;
      box-shadow: 0 8px 25px rgba(139, 126, 184, 0.4);
      transition: all 0.3s ease;
      animation: lunaPulse 3s ease-in-out infinite;
    }
    
    @keyframes lunaPulse {
      0%, 100% {
        transform: scale(1);
        box-shadow: 0 8px 25px rgba(139, 126, 184, 0.4);
      }
      50% {
        transform: scale(1.05);
        box-shadow: 0 12px 35px rgba(139, 126, 184, 0.6);
      }
    }
    
    #luna-bubble:hover {
      transform: scale(1.1);
      box-shadow: 0 12px 40px rgba(139, 126, 184, 0.7);
    }
    
    #luna-bubble:active {
      transform: scale(0.95);
    }
    
    #luna-modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 5000;
    }
    
    #luna-modal.show {
      display: block;
    }
    
    .luna-modal-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      animation: fadeIn 0.3s ease;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    .luna-modal-content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: white;
      border-radius: 25px;
      padding: 0;
      max-width: 90%;
      width: 420px;
      max-height: 80vh;
      overflow-y: auto;
      box-shadow: 0 20px 60px rgba(139, 126, 184, 0.3);
      animation: slideUp 0.3s ease;
    }
    
    @keyframes slideUp {
      from {
        transform: translate(-50%, -40%);
        opacity: 0;
      }
      to {
        transform: translate(-50%, -50%);
        opacity: 1;
      }
    }
    
    .luna-modal-header {
      background: linear-gradient(135deg, #8B7EB8 0%, #B8A7D5 100%);
      padding: 25px;
      border-radius: 25px 25px 0 0;
      display: flex;
      align-items: center;
      gap: 15px;
      position: relative;
    }
    
    .luna-avatar {
      width: 60px;
      height: 60px;
      background: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 35px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
    
    .luna-name {
      flex: 1;
      font-size: 28px;
      font-weight: bold;
      color: white;
    }
    
    .luna-close {
      position: absolute;
      top: 15px;
      right: 20px;
      font-size: 32px;
      color: white;
      cursor: pointer;
      opacity: 0.9;
      transition: all 0.3s;
    }
    
    .luna-close:hover {
      opacity: 1;
      transform: scale(1.1);
    }
    
    .luna-modal-body {
      padding: 30px;
    }
    
    .luna-message {
      animation: messageAppear 0.5s ease;
    }
    
    @keyframes messageAppear {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  
  document.head.appendChild(style);
})();
```

---

## ✅ **COMMIT CE FICHIER D'ABORD !**

**Message :**
```
Création bulle Luna flottante élégante
