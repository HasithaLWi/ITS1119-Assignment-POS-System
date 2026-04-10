export function updateDashboardStats() {
    const statCustomers = document.getElementById('stat-customers-count');
    const statItems = document.getElementById('stat-items-count');
    const statRevenue = document.getElementById('stat-revenue');

    if (statCustomers) {
        statCustomers.textContent = customerDB.length;
    }
    if (statItems) {
        statItems.textContent = itemDB.length;
    }
    if (statRevenue) {
        const totalRevenue = ordersList.reduce((sum, order) => {
            const total = Number(order.total);
            const discount = Number(order.discount);

            if (Number.isFinite(total) && Number.isFinite(discount)) {
                return sum + (total - discount);
            }

            const paid = Number(order.paid);
            return Number.isFinite(paid) ? sum + paid : sum;
        }, 0);

        statRevenue.textContent = totalRevenue.toFixed(2);
    }
}