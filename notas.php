
1. Instalar http-server

	npm install http-server -g

2. Instalar typescript

	npm install -g typescript

3. Version de typescript
	
	tsc --version

4. Iniciar un proyecto

	tsc --init

	Genera un archivo de configuracion JSON

5. Compilar un archivo typescript

	tsc /path

6. Correr JS usando Node

	node /path

7. Compilar multiples archivos

	En el archivo de configuracion "tsconfig.json" agregar lo siguiente

	"include": [
		"./src/**/*.ts"
	]

8. Establecer directorio de salida para los archivos compilados

	En el archivo de configuracion "tsconfig.json", agregar a la clave "compilerOptions" el valor "outDir": "./path" 

9. Comando para que supervisa el codigo y compila en tiempo real

	tsc --watch

