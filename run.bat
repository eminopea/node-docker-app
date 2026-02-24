echo Levantando contenedores...
docker compose up -d

echo Esperando inicializacion...
timeout /t 5

echo Guardando logs...
if not exist logs mkdir logs
docker compose logs -f > logs/logs_contenedores.log

echo Proceso completado.
pause
