// search.js

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const resultsContainer = document.getElementById("results-container");
  const sidebarLinks = document.getElementById("sidebar-links");
  const docPages = [
    {
      id: "Padding & Margin",
      link: "padding-and-margin",
      searchable: "Padding and Margin",
      category: "Box",
    },
    {
      id: "Overflow",
      link: "overflow",
      searchable: "Set overflow of you box",
      category: "Box",
    },
    {
      id: "Positioning",
      link: "position",
      searchable: "How to positioning you element.",
      category: "Box",
    },
    {
      id: "Width & Height",
      link: "width-and-height",
      searchable: "Width and Height",
      category: "Box",
    },
    // Layout
    {
      id: "Display",
      link: "display",
      searchable: "Display property",
      category: "Layout",
    },
    {
      id: "Flexbox",
      link: "flexbox",
      searchable: "Flexbox Layout",
      category: "Layout",
    },
    {
      id: "Grid",
      link: "grid-layout",
      searchable: "Learn about Grid layout",
      category: "Layout",
    },
    // Text and Typography
    {
      id: "Typography",
      link: "typography",
      searchable: "Hoho Spacing",
      category: "Text",
    },
    // Others
    {
      id: "Min Value",
      link: "negative-value",
      searchable: "Set min value or negative value",
      category: "Other",
    },
    {
      id: "Multi Value & Word",
      link: "double-value",
      searchable:
        "How the double value, separated by hypens ( - ) value work. ",
      category: "Other",
    },

    // Add more documentation pages with categories as needed
  ];
  const sidebar = document.getElementById("sidebar");
  const menuIcon = document.getElementById("menu-icon");

  // Populate sidebar links
  const categories = groupByCategory(docPages);
  Object.keys(categories).forEach((category) => {
    const categoryItem = document.createElement("div");
    categoryItem.classList =
      "w-full dis-flex flex-paremt-center fd-[col] ai-[full] gap-8px";
    categoryItem.innerHTML = `<h1 class="category-label">${category}</h1>`;

    const pageList = document.createElement("ul");
    categories[category].forEach((page) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<a href="${page.link}.html" class="docs-links">${page.id}</a>`;
      pageList.appendChild(listItem);
    });

    categoryItem.appendChild(pageList);
    sidebarLinks.appendChild(categoryItem);
  });

  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.trim();

    if (searchTerm === "") {
      // Clear results when the search term is empty
      displayResults([]);
    } else {
      const matchingPages = [];

      docPages.forEach((page) => {
        if (
          page.searchable.toLowerCase().includes(searchTerm.toLowerCase()) ||
          page.category.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          matchingPages.push({
            content: page.searchable,
            link: page.link,
            category: page.category,
          });
        }
      });

      displayResults(matchingPages, searchTerm);
    }
  });

  menuIcon.addEventListener("click", function () {
    const isMenuVisible = sidebar.classList.toggle("sidebar-visible");
    menuIcon.innerHTML = isMenuVisible ? "close" : "menu";
  });

  // Close sidebar when clicking outside of it
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".navbar") && !event.target.closest(".sidebar")) {
      const isMenuVisible = sidebar.classList.remove("sidebar-visible");
      menuIcon.innerHTML = isMenuVisible ? "close" : "menu";
    }
  });

  function displayResults(results, searchTerm) {
    resultsContainer.innerHTML = "";
    if (results.length === 0) {
      // Only show "No results found" if search term is not empty
      if (searchInput.value.trim() !== "") {
        resultsContainer.innerHTML = "<li class='rs-nf'>No results found.</li>";
      }
    } else {
      results.forEach((result) => {
        const listItem = document.createElement("li");
        listItem.classList.add("result-item");

        listItem.innerHTML = createHighlightedLink(
          result.content,
          result.link,
          result.category,
          searchTerm
        );
        resultsContainer.appendChild(listItem);
      });
    }
  }

  function createHighlightedLink(content, link, category, searchTerm) {
    const lowerCaseContent = content.toLowerCase();
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const index = lowerCaseContent.indexOf(lowerCaseSearchTerm);

    if (index !== -1) {
      const highlightedText = content.substring(
        index,
        index + searchTerm.length
      );
      const beforeText = content.substring(0, index);
      const afterText = content.substring(index + searchTerm.length);

      return `<a class="rs-item" href="${link}.html">
      <p class="category">Category: ${category}</p>
      <p>${beforeText}<span class="highlight">${highlightedText}</span>${afterText}</p>
      </a>`;
    } else {
      return `<a href="${link}.html" class="rs-item"><p class="category">Category: ${category}</p>${content}</a>`;
    }
  }

  function groupByCategory(pages) {
    return pages.reduce((result, page) => {
      const category = page.category;
      if (!result[category]) {
        result[category] = [];
      }
      result[category].push(page);
      return result;
    }, {});
  }
});
