const hotelData = {
    guests: [
        { name: 'Egor', lastName: 'Mazyrko', roomNumber: '11', duration: 7, activities: ['Сауна', 'Лижі'] },
        { name: 'Illa', lastName: 'Plysenko', roomNumber: '12', duration: 5, activities: ['Ьаня', 'Лижі'] },
        { name: 'Tereza', lastName: 'Grechanuk', roomNumber: '13', duration: 10, activities: ['Каток', 'Сауна', 'Лижі'] },
    ],
    reservations: [
        { startDate: '2023-12-20', endDate: '2023-12-25' },
    ],
};

function searchGuest() {
    const guestName = document.getElementById('guestName').value;
    const guestInfo = document.getElementById('guestInfo');
    
    const foundGuest = hotelData.guests.find(guest => guest.name === guestName);

    if (foundGuest) {
        guestInfo.innerHTML = `
            <p>Ім'я: ${foundGuest.name}</p>
            <p>Фамілія: ${foundGuest.lastName}</p>
            <p>Номер номера: ${foundGuest.roomNumber}</p>
            <p>Тривалість перебування: ${foundGuest.duration} днів</p>
            <p>Розваги: ${foundGuest.activities.join(', ')}</p>
        `;
    } else {
        guestInfo.innerHTML = '<p>Гість не знайдений</p>';
    }
}

function reserveRoom() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const reservationResult = document.getElementById('reservationResult');

    const overReservation = hotelData.reservations.find(reservation =>
        (startDate >= reservation.startDate && startDate <= reservation.endDate) ||
        (endDate >= reservation.startDate && endDate <= reservation.endDate)
    );

    if (overReservation) {
        reservationResult.innerHTML = '<p>Ці дати вже заброньовані</p>';
    } else {
        hotelData.reservations.push({ startDate, endDate });
        reservationResult.innerHTML = '<p>Номер успішно заброньовано</p>';
    }
}