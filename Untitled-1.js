<button onclick = "toggleContent()">Toggle Content</button>


<script>
    function toggleContent() {
        var content = document.querySelector('.center-box');
        content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';
    }
</script>