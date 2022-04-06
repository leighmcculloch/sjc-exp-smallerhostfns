SJC=$(HOME)/.bin/sjc

test: $(SJC)
	mkdir -p tests-scratch
	cp tests/*.ts tests-scratch
	cp impl/1-named/*.ts tests-scratch
	$(SJC) build -o 1-named-1.wasm tests-scratch/1.ts
	$(SJC) build -o 1-named-2.wasm tests-scratch/2.ts
	$(SJC) build -o 1-named-3.wasm tests-scratch/3.ts
	rm -fr tests-scratch

	mkdir -p tests-scratch
	cp tests/*.ts tests-scratch
	cp impl/2-vop/*.ts tests-scratch
	$(SJC) build -o 2-vop-1.wasm tests-scratch/1.ts
	$(SJC) build -o 2-vop-2.wasm tests-scratch/2.ts
	$(SJC) build -o 2-vop-3.wasm tests-scratch/3.ts
	rm -fr tests-scratch

	mkdir -p tests-scratch
	cp tests/*.ts tests-scratch
	cp impl/3-sfn/*.ts tests-scratch
	$(SJC) build -o 3-sfn-1.wasm tests-scratch/1.ts
	$(SJC) build -o 3-sfn-2.wasm tests-scratch/2.ts
	$(SJC) build -o 3-sfn-3.wasm tests-scratch/3.ts
	rm -fr tests-scratch

	ls -lh *.wasm

$(SJC):
	curl -fsSL https://github.com/leighmcculloch/sjc/raw/main/install.sh | sh
