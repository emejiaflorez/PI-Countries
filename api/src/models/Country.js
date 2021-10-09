const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    ID: //Id. de 3 letras codigo)
        { type: DataTypes.STRING(3)
    }, 
    nombre: 
        { type: DataTypes.STRING, 
          allowNull: false,
    },
    imgFlag: 
        { type: DataTypes.BLOB,
          allowNull: false, 
    },
    continente: 
        { type: DataTypes.STRING, 
          allowNull: false,
    },
    capital: 
        { type: DataTypes.STRING, 
          allowNull: false,
    },
    subRegion: 
        { type: DataTypes.STRING
    },
    area: 
        { type: DataTypes.DOUBLE
    },  
    poblacion: 
        { type: DataTypes.DOUBLE
    }      
  });
};


