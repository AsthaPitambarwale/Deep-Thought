function createAssetCard(asset) {
    return `
        <div class="card">
            <header class="card-header">
                <h2>${asset.asset_name}</h2>
                <i class="bi bi-info-circle-fill"></i>
            </header>
            <p class="description">
                <strong>Description:</strong> ${asset.asset_description || "No description provided."}
            </p>
            <hr>
            <br>
            <div class="content">
                ${asset.asset_content || "No content available."}
            </div>
        </div>
    `;
}
