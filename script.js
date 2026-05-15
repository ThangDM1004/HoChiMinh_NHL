 const galleries = [
      [// I
        ["images/stage1/lang kim lien.jpg", "Khu di tích Kim Liên — quê hương Chủ tịch Hồ Chí Minh, Nam Đàn, Nghệ An"],
        ["images/stage1/nha tho au.jpg", "Ngôi nhà tuổi thơ tại làng Kim Liên"],
        ["images/stage1/truong quoc hoc.jpg", "Trường Quốc Học Huế — nơi Người theo học, tiếp xúc tư tưởng tiến bộ"],
        ["images/stage1/co do Hue.jpg", "Cố đô Huế — trung tâm chính trị nơi Người chứng kiến sự thống trị thực dân"],
        ["images/stage1/ben nha rong.webp", "Bến Nhà Rồng (Sài Gòn) — nơi Người ra đi ngày 5/6/1911"],
        ["images/stage1/nghệ an.webp", "Phong cảnh xứ Nghệ — quê hương hun đúc tinh thần yêu nước"]
      ],
      [// II
        ["images/stage2/hồ chí minh.jpg", "Chủ tịch Hồ Chí Minh — người sáng lập Đảng Cộng sản Việt Nam"],
        ["images/stage2/Hội nghị Versailles.jpg", "Hội nghị Hòa bình Versailles 1919 — nơi Nguyễn Ái Quốc gửi Bản yêu sách"],
        ["images/stage2/V.I. Lenin — Luận cương khai sáng con đường cách mạng.jpg", "V.I. Lenin — Luận cương về dân tộc và thuộc địa khai sáng con đường cách mạng"],
        ["images/stage2/Paris những năm 1920 — nơi Người hoạt động và bỏ phiếu thành lập Đảng CS Pháp.jpg", "Paris những năm 1920 — nơi Người học tập và bỏ phiếu thành lập Đảng CS Pháp"],
        ["images/stage2/Quảng Châu, Trung Quốc — nơi Người lập Hội Việt Nam CM Thanh niên (1925).jpg", "Quảng Châu, Trung Quốc — nơi thành lập Hội Việt Nam CM Thanh niên (1925)"],
        ["images/stage2/Đảng Cộng sản Việt Nam thành lập tại Hồng Kông.jpg", "Đảng Cộng sản Việt Nam thành lập ngày 3/2/1930 tại Hồng Kông"]
      ],
      [// III
        ["images/stage3/Hang Pác Bó, Cao Bằng — căn cứ địa cách mạng của Bác Hồ (1941).jpg", "Hang Pác Bó, Cao Bằng — căn cứ địa cách mạng của Bác Hồ năm 1941"],
        ["images/stage3/Suối Lênin — nơi Bác Hồ ngồi làm việc và câu cá.png", "Suối Lênin — nơi Bác Hồ ngồi làm việc và câu cá"],
        ["images/stage3/Núi rừng Cao Bằng — căn cứ địa cách mạng những năm 1940s.png", "Núi rừng Cao Bằng — căn cứ địa cách mạng những năm 1940s"],
        ["images/stage3/Quảng trường Ba Đình — nơi đọc Tuyên ngôn Độc lập 2.9.1945.jpg", "Quảng trường Ba Đình, Hà Nội — nơi đọc Tuyên ngôn Độc lập 2/9/1945"],
        ["images/stage3/Cách mạng Tháng Tám 1945 — nhân dân khởi nghĩa giành chính quyền.jpg", "Cách mạng Tháng Tám 1945 — nhân dân khởi nghĩa giành chính quyền"],
        ["images/stage3/Bộ đội Việt Minh — lực lượng vũ trang cách mạng do Hồ Chí Minh lãnh đạo.jpg", "Bộ đội Việt Minh — lực lượng vũ trang cách mạng do Hồ Chí Minh lãnh đạo"]
      ],
      [// IV
        ["images/stage4/Nhà sàn Bác Hồ (Phủ Chủ tịch) — biểu tượng lối sống giản dị.jpg", "Nhà sàn Bác Hồ tại Phủ Chủ tịch — biểu tượng lối sống giản dị"],
        ["images/stage4/Chiến trường Điện Biên Phủ 1954 — Chấn động địa cầu.jpg", "Chiến trường Điện Biên Phủ 1954 — Chấn động địa cầu"],
        ["images/stage4/Chiến thắng Điện Biên Phủ 7.5.1954 kết thúc thực dân Pháp.jpg", "Chiến thắng Điện Biên Phủ 7/5/1954 kết thúc thực dân Pháp"],
        ["images/stage4/Lăng Chủ tịch Hồ Chí Minh tại Quảng trường Ba Đình, Hà Nội.png", "Lăng Chủ tịch Hồ Chí Minh tại Quảng trường Ba Đình, Hà Nội"],
        ["images/stage4/Bảo tàng Hồ Chí Minh — lưu giữ ký ức về cuộc đời và sự nghiệp của Người.jpg", "Bảo tàng Hồ Chí Minh — lưu giữ ký ức về cuộc đời và sự nghiệp của Người"],
        ["images/stage4/Bác Hồ với các cháu thiếu nhi — Người đặc biệt yêu thương thế hệ trẻ.jpg", "Bác Hồ với các cháu thiếu nhi — Người đặc biệt yêu thương thế hệ trẻ"]
      ]
    ];

    let curG = 0, curI = 0;

    function openLb(g, i) {
      curG = g; curI = i;
      const [src, cap] = galleries[g][i];
      const img = document.getElementById('lb-img');
      img.src = src;
      document.getElementById('lb-cap').textContent = cap;
      document.getElementById('lb-ctr').textContent = (i + 1) + ' / ' + galleries[g].length;
      document.getElementById('lb').classList.add('active');
      document.body.style.overflow = 'hidden';
    }
    function closeLb() { document.getElementById('lb').classList.remove('active'); document.body.style.overflow = ''; }
    function lbBg(e) { if (e.target === document.getElementById('lb')) closeLb(); }
    function lbStep(d) {
      const g = galleries[curG];
      curI = (curI + d + g.length) % g.length;
      const [src, cap] = g[curI];
      const img = document.getElementById('lb-img');
      img.style.opacity = '0';
      setTimeout(() => { img.src = src; document.getElementById('lb-cap').textContent = cap; document.getElementById('lb-ctr').textContent = (curI + 1) + ' / ' + g.length; img.style.opacity = '1'; }, 160);
    }
    document.addEventListener('keydown', e => {
      if (!document.getElementById('lb').classList.contains('active')) return;
      if (e.key === 'Escape') closeLb();
      if (e.key === 'ArrowRight') lbStep(1);
      if (e.key === 'ArrowLeft') lbStep(-1);
    });

    function imgFail(el) {
      const item = el.closest('.gallery-item');
      item.style.background = 'var(--parchment)';
      item.style.cursor = 'default';
      el.remove();
      const d = document.createElement('div');
      d.style.cssText = 'height:100%;display:flex;align-items:center;justify-content:center;color:var(--muted);font-size:12px;font-style:italic;padding:8px;text-align:center';
      d.textContent = 'Hình ảnh không khả dụng';
      item.prepend(d);
      item.onclick = null;
    }