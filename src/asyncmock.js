const misEventos = [
    { id: 1, nombre: "Festival Electro Night", precio: 150000, fecha: "2026-03-15", img: "https://images.unsplash.com/photo-1506157786151-b8491531f063" },
    { id: 2, nombre: "Recital Rock Nacional", precio: 90800, fecha: "2026-04-02", img: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=800&q=80" },
    { id: 3, nombre: "Show Pop en Vivo", precio: 125000, fecha: "2026-05-10", img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2" },
    { id: 4, nombre: "Festival Indie Weekend", precio: 80000, fecha: "2026-06-18", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30" }
];

export const getEventos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misEventos);
        }, 2000);
    });
}

export const getUnEvento = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const evento = misEventos.find(evento => evento.id === id);
            resolve(evento);
        }, 2000);
    });
}