// Khai báo mảng để lưu trữ số
let numbers = [];

// Hiển thị mảng và kết quả
const displayArray = () => {
    document.getElementById("arrayDisplay").innerText = `Mảng hiện tại: [${numbers  }]`;
};
const showResult = (message) => {
    document.getElementById("resultDisplay").innerText = message;
};

// Thêm số vào mảng
const addNumbers = () => {
    const input = document.getElementById("arrayInput").value;
    if (input === "") {
        showResult("Hãy nhập các số hợp lệ.");
        return;
    }
    numbers = input.split(",").map(Number);
    displayArray();
    showResult("Mảng đã được cập nhật.");
};

// 1. Tổng các số dương
function sumPositive() {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) 
            sum += numbers[i];
    }
    showResult(`Tổng các số dương: ${sum}`);
};


// 2. Đếm số dương
function countPositive() {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) 
            count++;
    }
    showResult(`Số lượng số dương: ${count}`);
};


// 3. Số nhỏ nhất
function findMin() {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) 
            min = numbers[i];
    }
    showResult(`Số nhỏ nhất: ${min}`);
}


// 4. Số dương nhỏ nhất
function findMinPositive() {
    let minPositive = Infinity;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0 && numbers[i] < minPositive) {
            minPositive = numbers[i];
        }
    }
    showResult(minPositive === Infinity ? "Không có số dương" : `Số dương nhỏ nhất: ${minPositive}`);
}


// 5. Số chẵn cuối cùng
function findLastEven() {
    let lastEven = -1;
    for (let i = numbers.length - 1; i >= 0; i--) {
        if (numbers[i] % 2 === 0) {
            lastEven = numbers[i];
            break;
        }
    }
    showResult(`Số chẵn cuối cùng: ${lastEven}`);
}


// 6. Đổi chỗ 2 vị trí
function swapPositions(pos1, pos2) {
    if (pos1 >= 0 && pos1 < numbers.length && pos2 >= 0 && pos2 < numbers.length) {
        let temp = numbers[pos1];
        numbers[pos1] = numbers[pos2];
        numbers[pos2] = temp;
    }
    showResult(`Mảng sau khi đổi: [${numbers}]`);
}


// 7. Sắp xếp mảng tăng dần
function sortAscending() {
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] > numbers[j]) {
                let temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }
    showResult(`Mảng sau khi sắp xếp: [${numbers}]`);
};



// 8. Số nguyên tố đầu tiên
function findFirstPrime() {
    function isPrime(n) {
        if (n <= 1) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }
    let firstPrime = -1;
    for (let i = 0; i < numbers.length; i++) {
        if (isPrime(numbers[i])) {
            firstPrime = numbers[i];
            break;
        }
    }
    showResult(`Số nguyên tố đầu tiên: ${firstPrime}`);
};


// 9. Đếm số nguyên trong mảng số thực
function countIntegers(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i])) count++;
    }
    showResult(`Số lượng số nguyên: ${count}`);
};


// 10. So sánh số dương và số âm
function comparePositiveNegative() {
    let positives = 0, negatives = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) positives++;
        if (numbers[i] < 0) negatives++;
    }
    if (positives > negatives) {
        showResult("Số dương nhiều hơn số âm");
    } else if (positives < negatives) {
        showResult("Số âm nhiều hơn số dương");
    } else {
        showResult("Số lượng số dương và số âm bằng nhau");
    }
}

