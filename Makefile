
build:
	docker compose build

dev:
	docker compose up portfolio-dev

all:
	docker compose up --build

re:
	docker compose down
	docker compose build --no-cache
	docker compose up


shell:
	docker compose exec portfolio-dev sh


stop:
	docker compose down

clean:
	docker compose down
	docker system prune -f 

.PHONY: build dev all re shell stop clean