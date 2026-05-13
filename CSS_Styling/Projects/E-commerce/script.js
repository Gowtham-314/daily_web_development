document.addEventListener('DOMContentLoaded', () => {
	const searchInput = document.getElementById('searchInput');
	const chips = document.querySelectorAll('.chip');
	const cards = document.querySelectorAll('.product-card');

	let activeCategory = 'all';

	const applyFilters = () => {
		const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

		cards.forEach((card) => {
			const category = card.dataset.cat || 'all';
			const searchableText = `${card.dataset.search || ''} ${card.textContent}`.toLowerCase();
			const matchesCategory = activeCategory === 'all' || category === activeCategory;
			const matchesQuery = !query || searchableText.includes(query);

			card.hidden = !(matchesCategory && matchesQuery);
		});
	};

	chips.forEach((chip) => {
		chip.addEventListener('click', () => {
			chips.forEach((button) => button.classList.remove('active'));
			chip.classList.add('active');
			activeCategory = chip.dataset.cat || 'all';
			applyFilters();
		});
	});

	if (searchInput) {
		searchInput.addEventListener('input', applyFilters);
	}

	window.showPage = (sectionId) => {
		const target = document.getElementById(sectionId);

		if (!target) {
			return;
		}

		target.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	applyFilters();
});
