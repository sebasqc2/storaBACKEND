'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */
const findbynombre = async(pObjeto) => {
    const { nombre } = pObjeto.params;
    const resultado = await strapi.query('tiendas').find({ 'nombre': nombre });
    return resultado;
}
module.exports = { findbynombre };