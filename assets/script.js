function showSection(sectionid){
    document.querySelectorAll('.content_section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionid).classList.remove('hidden');
}

