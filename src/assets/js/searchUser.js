const ESTRUCTURA_FILTROS = {
    id: null,
    email: null,    
    first_name: null,
    last_name: null,
    birthday: null,    
};

export function filtrarUsuarios(usuarios, valor) {
    
    if (!usuarios || !Array.isArray(usuarios)) {
        return [];
    }
    
    if (!valor) {
        return usuarios;
    }

    const filtros = { 
        id: valor,
        email: valor, 
        first_name: valor, 
        last_name: valor, 
        birthday: valor 
    };
    
    const parsearFecha = (fechaStr) => {
        const [dia, mes, año] = fechaStr.split('/');
        return new Date(año, mes - 1, dia);
    };
    
    const esFechaValida = (str) => {
        return /^\d{2}\/\d{2}\/\d{4}$/.test(str);
    };

    return usuarios.filter(usuario => {
        return Object.entries(filtros)
            .filter(([propiedad]) => propiedad !== 'password') // Excluimos password
            .some(([propiedad, valorFiltro]) => {
                // Si el campo es nulo, lo saltamos
                if (!usuario[propiedad]) return false;

                // Manejo especial para fechas
                if (propiedad === 'birthday' && esFechaValida(String(valorFiltro))) {
                    const fechaBusqueda = parsearFecha(String(valorFiltro));
                    const fechaUsuario = new Date(usuario[propiedad]);
                    return fechaBusqueda.getTime() === fechaUsuario.getTime();
                }

                // Búsqueda normal para texto y números
                const valorUsuario = String(usuario[propiedad]).toLowerCase();
                const valorBusqueda = String(valorFiltro).toLowerCase();
                return valorUsuario.includes(valorBusqueda);
            });
    });
}