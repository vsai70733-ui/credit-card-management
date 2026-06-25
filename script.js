document.addEventListener('DOMContentLoaded', () => {
    // 3D Card Hover Effect
    const card = document.getElementById('credit-card');
    
    if (card) {
        const cardInner = card.querySelector('.card-inner');
        const cardGlare = card.querySelector('.card-glare');

        if (cardInner && cardGlare) {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -15;
                const rotateY = ((x - centerX) / centerX) * 15;
                
                cardInner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                
                // Glare effect
                const glareX = (x / rect.width) * 100;
                const glareY = (y / rect.height) * 100;
                cardGlare.style.transform = `translate(${glareX - 50}%, ${glareY - 50}%)`;
                cardGlare.style.opacity = '1';
            });

            card.addEventListener('mouseleave', () => {
                cardInner.style.transform = 'rotateX(0) rotateY(0)';
                cardInner.style.transition = 'transform 0.5s ease';
                cardGlare.style.opacity = '0';
                
                setTimeout(() => {
                    cardInner.style.transition = '';
                }, 500);
            });
        }
    }

    // Mock Transactions Data
    const transactions = [
        {
            id: 1,
            name: "Apple Store",
            category: "shopping",
            icon: "logo-apple",
            date: "Today, 14:24",
            amount: "-$999.00",
            type: "negative",
            status: "completed"
        },
        {
            id: 2,
            name: "Netflix Subscription",
            category: "subscription",
            icon: "play-circle-outline",
            date: "Yesterday, 09:00",
            amount: "-$15.99",
            type: "negative",
            status: "completed"
        },
        {
            id: 3,
            name: "Salary Deposit",
            category: "transfer",
            icon: "briefcase-outline",
            date: "Oct 24, 08:30",
            amount: "+$4,250.00",
            type: "positive",
            status: "completed"
        },
        {
            id: 4,
            name: "Starbucks Coffee",
            category: "food",
            icon: "cafe-outline",
            date: "Oct 23, 10:15",
            amount: "-$5.40",
            type: "negative",
            status: "completed"
        },
        {
            id: 5,
            name: "Amazon Flex",
            category: "shopping",
            icon: "cart-outline",
            date: "Oct 21, 16:45",
            amount: "-$124.50",
            type: "negative",
            status: "completed"
        }
    ];

    // Render Transactions
    const transactionList = document.getElementById('transaction-list');
    
    if (transactionList) {
        transactions.forEach((tx, index) => {
            const delay = index * 0.1;
            const txElement = document.createElement('div');
            txElement.className = 'transaction-item';
            txElement.style.animationDelay = `${delay}s`;
            
            txElement.innerHTML = `
                <div class="tx-left">
                    <div class="tx-icon ${tx.category}">
                        <ion-icon name="${tx.icon}"></ion-icon>
                    </div>
                    <div class="tx-details">
                        <span class="tx-name">${tx.name}</span>
                        <span class="tx-date">${tx.date}</span>
                    </div>
                </div>
                <div class="tx-right">
                    <span class="tx-amount ${tx.type}">${tx.amount}</span>
                    <span class="tx-status ${tx.status}">${tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}</span>
                </div>
            `;
            
            transactionList.appendChild(txElement);
        });
    }

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const sidebar = document.querySelector('.sidebar');
    
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }

    // Amount input formatting
    const amountInput = document.querySelector('.amount-input input');
    if (amountInput) {
        amountInput.addEventListener('blur', function() {
            if (this.value) {
                this.value = parseFloat(this.value).toFixed(2);
            }
        });
    }
});
