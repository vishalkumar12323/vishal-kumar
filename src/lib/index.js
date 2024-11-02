const percentageLines = document.querySelectorAll(".percentage");

const progressBar = () => {

    percentageLines.forEach((element) => {
        let startWidth = 0;
        let endWidth = element?.attributes?.dataset?.value;
        function loading() {
            if(startWidth >= endWidth) {
                clearInterval(timer);
            }else {
                startWidth++;
                element.firstElementChild.style.width = `${endWidth}%` ;
            }
        };
    
        let timer = setInterval(loading, 4000);
    })

};

export {progressBar};