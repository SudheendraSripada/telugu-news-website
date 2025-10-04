// Telugu News Website JavaScript with Enhanced Features

// Application data with images
const appData = {
  "websiteLogo": {
    "url": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMzAiIGZpbGw9IiMyNTYzRUIiLz4KPHRleHQgeD0iMzAiIHk9IjM4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSI+VE48L3RleHQ+Cjwvc3ZnPgo=",
    "alt": "తెలుగు న్యూస్ లోగో"
  },
  "featuredNews": [
    {
      "id": 1,
      "category": "andhra-pradesh",
      "date": "25 జులై, 2025",
      "title": "సీఎం చంద్రబాబు బంగారు కుటుంబాలను దత్తత తీసుకునే నిర్ణయం - జీరో పావర్టీ పీ4 కార్యక్రమంలో కీలక మలుపు",
      "summary": "మార్గదర్శులుగా ముఖ్యమంత్రి చంద్రబాబు నాయుడు, ఆయన కుటుంబ సభ్యులు బంగారు కుటుంబాలకు సాయం అందించాలని నిర్ణయం. జీరో పావర్టీ పీ4 సమీక్షలో వెల్లడించిన కీలక విషయాలు.",
      "author": "తెలుగు న్యూస్ టీమ్",
      "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMjAgODBMMTgwIDEyMEgxMjBWODBaIiBmaWxsPSIjMjU2M0VCIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTYwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2Qjc0ODgiPtCf0L7Qu9C40YLQuNC60LA8L3RleHQ+Cjwvc3ZnPgo=",
      "alt": "రాజకీయ వార్తల చిత్రం"
    },
    {
      "id": 2,
      "category": "politics",
      "date": "25 జులై, 2025",
      "title": "పేదరిక నిర్మూలనకు చంద్రబాబు కుటుంబం మార్గదర్శకత్వం - జీరో పావర్టీ పీ4లో కీలక నిర్ణయాలు",
      "summary": "రాష్ట్రంలో పేదరిక నిర్మూలనకు సంకల్పించిన ముఖ్యమంత్రి నారా చంద్రబాబు నాయుడు తన కుటుంబ సభ్యులతో కలిసి బంగారు కుటుంబాలను దత్తత తీసుకునే కీలక నిర్ణయం. ప్రవాసాంధ్రుల భాగస్వామ్యంతో కార్యక్రమం విస్తరణ.",
      "author": "తెలుగు న్యూస్ డెస్క్",
      "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRUZGNkZGIi8+CjxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMDAiIHJ4PSIxMCIgZmlsbD0iIzI1NjNFQiIvPgo8dGV4dCB4PSIxNTAiIHk9IjE2MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNkI3NDg4Ij7Qo9C/0YDQsNCy0LvQtdC90LjQtTwvdGV4dD4KPC9zdmc+Cg==",
      "alt": "ప్రభుత్వ పథకాల చిత్రం"
    }
  ],
  "latestNews": [
    {
      "category": "ఆరోగ్యం",
      "date": "24 జులై, 2025",
      "title": "కరోనా కేసులు మళ్లీ పెరుగుతున్నాయి",
      "summary": "హైదరాబాద్‌లో కరోనా కేసుల సంఖ్య రోజుకు 50కి చేరుకుంది",
      "author": "డాక్టర్ రాజేశ్",
      "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDE1MCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRkVGMkYyIi8+CjxjaXJjbGUgY3g9Ijc1IiBjeT0iNTAiIHI9IjI1IiBmaWxsPSIjRUY0NDQ0Ii8+Cjx0ZXh0IHg9Ijc1IiB5PSI4NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmaWxsPSIjNkI3NDg4Ij7QsNGA0L7Qs9GM0Y/QvNC60YzQvTwvdGV4dD4KPC9zdmc+Cg==",
      "alt": "ఆరోగ్య వార్తల చిత్రం"
    },
    {
      "category": "విద్య",
      "date": "24 జులై, 2025",
      "title": "విద్యార్థులకు స్కాలర్‌షిప్ పథకం",
      "summary": "మెధావి విద్యార్థులకు ప్రభుత్వం స్కాలర్‌షిప్‌లు",
      "author": "విద్యా రిపోర్టర్ రమేష్",
      "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDE1MCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjBGOUZGIi8+CjxwYXRoIGQ9Ik01MCA0MEg2MFY2MEg1MFY0MFoiIGZpbGw9IiMyNTYzRUIiLz4KPHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMTAwIDYwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMjUgMjBINzVWNDBIMjVWMjBaIiBmaWxsPSIjMjU2M0VCIi8+Cjx0ZXh0IHg9Ijc1IiB5PSI4NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmaWxsPSIjNkI3NDg4Ij7QstC40LTRjNGP0LPQsNGA0LTQu9C10L/QtdC90LjQtTwvdGV4dD4KPC9zdmc+Cjwvc3ZnPgo=",
      "alt": "విద్యా వార్తల చిత్రం"
    },
    {
      "category": "వాతావరణం",
      "date": "24 జులై, 2025",
      "title": "వర్షాలు రాబోతున్నాయి",
      "summary": "వాతావరణ శాఖ మూడు రోజుల వర్షాలు అంచనా",
      "author": "వాతావరణ రిపోర్టర్ రాజేశ్",
      "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDE1MCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjBGOUZGIi8+CjxjaXJjbGUgY3g9Ijc1IiBjeT0iNDAiIHI9IjIwIiBmaWxsPSIjNjM2Nkl2Ii8+Cjx0ZXh0IHg9Ijc1IiB5PSI4NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmaWxsPSIjNkI3NDg4Ij7RgNC+0ZPQsNC00ZnRjzwvdGV4dD4KPC9zdmc+Cg==",
      "alt": "వాతావరణ వార్తల చిత్రం"
    },
    {
      "category": "ఆటో",
      "date": "24 జులై, 2025",
      "title": "కారు ధరలు పెరుగుతున్నాయి",
      "summary": "కొత్త ఆటో పాలసీ వల్ల కారు ధరలు 5% పెరుగుతాయి",
      "author": "ఆటో రిపోర్టర్ శ్రీనివాస్",
      "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDE1MCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRkVGNkY2Ii8+CjxwYXRoIGQ9Ik0yNSA0MEgxMjVWNjBIMjVWNDBaIiBmaWxsPSIjMjU2M0VCIi8+CjxjaXJjbGUgY3g9IjQwIiBjeT0iNzAiIHI9IjgiIGZpbGw9IiMzNzM3MzciLz4KPGNpcmNsZSBjeD0iMTEwIiBjeT0iNzAiIHI9IjgiIGZpbGw9IiMzNzM3MzciLz4KPHR5eXQgeD0iNzUiIHk9Ijg1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiM2Qjc0ODgiPtCh0LjRgtGM0YDQvNCw0L08L3RleHQ+Cjwvc3ZnPgo=",
      "alt": "ఆటో వార్తల చిత్రం"
    },
    {
      "category": "రియల్ ఎస్టేట్",
      "date": "24 జులై, 2025",
      "title": "రియల్ ఎస్టేట్ మార్కెట్‌లో మార్పులు",
      "summary": "హైదరాబాద్‌లో ఇల్లు ధరలు 10% పెరిగాయి",
      "author": "రియల్ ఎస్టేట్ రిపోర్టర్ మోహన్",
      "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDE1MCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRkVGNkZFIi8+CjxwYXRoIGQ9Ik0yNSA3MEg1MFYzMEg3NVY3MEgxMDBWMzBIMTI1VjcwSDE1MCIgZmlsbD0iIzI1NjNFQiIvPgo8dGV4dCB4PSI3NSIgeT0iODUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMCIgZmlsbD0iIzZCNzQ4OCI+0JPRgNC+0LjQmNC90YHRg9C+0YHRh9C+PC90ZXh0Pgo8L3N2Zz4K",
      "alt": "రియల్ ఎస్టేట్ వార్తల చిత్రం"
    },
    {
      "category": "దేశం",
      "date": "24 జులై, 2025",
      "title": "బెంగళూరులో దాడి ఘటన",
      "summary": "టెక్ ఇంజనీర్‌పై దాడి - కేసు నమోదు",
      "author": "క్రైమ్ రిపోర్టర్ సునీల్",
      "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDE1MCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRkVGMkYyIi8+CjxyZWN0IHg9IjQwIiB5PSIzMCIgd2lkdGg9IjcwIiBoZWlnaHQ9IjQwIiByeD0iNSIgZmlsbD0iI0VGNDQ0NCIvPgo8dGV4dCB4PSI3NSIgeT0iODUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMCIgZmlsbD0iIzZCNzQ4OCI+0J3QvtCy0LjRhdC60YbQsNGA0YPQt9C10L08L3RleHQ+Cjwvc3ZnPgo=",
      "alt": "దేశ వార్తల చిత్రం"
    }
  ],
  "businessNews": [
    {
      "category": "వ్యాపారం",
      "date": "24 జులై, 2025",
      "title": "విశాఖలో పెట్రో కెమికల్ ప్లాంట్",
      "summary": "విశాఖపట్టణంలో కొత్త పెట్రో కెమికల్ ప్లాంట్ ప్రారంభం",
      "author": "ఇండస్ట్రీ రిపోర్టర్ వేణు",
      "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDE1MCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjBGOUZGIi8+CjxyZWN0IHg9IjMwIiB5PSIyMCIgd2lkdGg9IjkwIiBoZWlnaHQ9IjUwIiByeD0iNSIgZmlsbD0iIzI1NjNFQiIvPgo8Y2lyY2xlIGN4PSI2MCIgY3k9IjMwIiByPSI4IiBmaWxsPSIjRkY1NzIyIi8+CjxjaXJjbGUgY3g9IjkwIiBjeT0iMzAiIHI9IjgiIGZpbGw9IiNGRjU3MjIiLz4KPHR5eXQgeD0iNzUiIHk9Ijg1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiM2Qjc0ODgiPtCf0YDRgdCk0L7Qv9Cv0LzQvtK40L7RgtC60LjQvdC+PC90ZXh0Pgo8L3N2Zz4K",
      "alt": "వ్యాపార వార్తల చిత్రం"
    },
    {
      "category": "వ్యాపారం",
      "date": "23 జులై, 2025",
      "title": "హైటెక్ సిటీలో కొత్త IT కంపెనీల అభివృద్ధి",
      "summary": "హైదరాబాద్ హైటెక్ సిటీలో మరో 10 అంతర్జాతీయ కంపెనీలు వస్తున్నాయి",
      "author": "రమేష్ బాబు",
      "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDE1MCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRkFGQUZBIi8+CjxyZWN0IHg9IjIwIiB5PSIzMCIgd2lkdGg9IjExMCIgaGVpZ2h0PSI0MCIgcng9IjUiIGZpbGw9IiMyNTYzRUIiLz4KPGV4dCB4PSI3NSIgeT0iODUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMCIgZmlsbD0iIzZCNzQ4OCI+SUnCiVvRgtGd0YzNzPC90ZXh0Pgo8L3N2Zz4K",
      "alt": "IT వార్తల చిత్రం"
    }
  ],
  "cinemaNews": [
    {
      "category": "సినిమా",
      "date": "25 జులై, 2025",
      "title": "పుష్ప 2 ది రూల్ - అల్లు అర్జున్ మూవీ అప్డేట్",
      "summary": "ఐకాన్ స్టార్ అల్లు అర్జున్ నటిస్తున్న పుష్ప 2 సినిమా గురించి తాజా అప్డేట్. చిత్రబృందం ప్రకటనలు విడుదల చేసింది.",
      "author": "సినిమా రిపోర్టర్",
      "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDE1MCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRkVGMkVGIi8+CjxyZWN0IHg9IjIwIiB5PSIyMCIgd2lkdGg9IjExMCIgaGVpZ2h0PSI2MCIgcng9IjUiIGZpbGw9IiNGRjU3MjIiLz4KPHN0aXJjbGUgY3g9Ijc1IiBjeT0iNTAiIHI9IjE1IiBmaWxsPSJ3aGl0ZSIvPgo8dGV4dCB4PSI3NSIgeT0iODUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMCIgZmlsbD0iIzZCNzQ4OCI+0YLRgdGHLv</text>Cjwvc3ZnPgo=",
      "alt": "సినిమా వార్తల చిత్రం"
    }
  ],
  "trendingNews": [
    {
      "rank": 1,
      "title": "సీఎం చంద్రబాబు బంగారు కుటుంబాలను దత్తత తీసుకునే నిర్ణయం - జీరో పావర్టీ పీ4 కార్యక్రమంలో కీలక మలుపు",
      "author": "తెలుగు న్యూస్ టీమ్",
      "date": "25 జులై"
    },
    {
      "rank": 2,
      "title": "పేదరిక నిర్మూలనకు చంద్రబాబు కుటుంబం మార్గదర్శకత్వం - జీరో పావర్టీ పీ4లో కీలక నిర్ణయాలు",
      "author": "తెలుగు న్యూస్ డెస్క్",
      "date": "25 జులై"
    },
    {
      "rank": 3,
      "title": "విద్యార్థుల స్కాలర్షిప్ స్కీమ్ - ఆన్లైన్ దరఖాస్తులు ప్రారంభం",
      "author": "విద్యా విభాగం రిపోర్టర్",
      "date": "25 జులై"
    },
    {
      "rank": 4,
      "title": "పుష్ప 2 ది రూల్ - అల్లు అర్జున్ మూవీ అప్డేట్",
      "author": "సినిమా రిపోర్టర్",
      "date": "25 జులై"
    },
    {
      "rank": 5,
      "title": "జీరో పావర్టీ పీ4: ముఖ్యమంత్రి చంద్రబాబు నాయుడు కుటుంబంతో బంగారు కుటుంబాల దత్తత",
      "author": "తెలుగు వార్తలు టీమ్",
      "date": "25 జులై"
    }
  ],
  "weather": {
    "city": "హైదరాబాద్",
    "temperature": "28°C",
    "condition": "తేలికపాటి మేఘాలు",
    "humidity": "65%",
    "icon": "🌤️"
  },
  "categories": [
    {
      "name": "Andhra Pradesh",
      "description": "News and updates from Andhra Pradesh state",
      "link": "#andhra-pradesh"
    },
    {
      "name": "Government Schemes",
      "description": "Government welfare schemes and policies",
      "link": "#government-schemes"
    },
    {
      "name": "Politics",
      "description": "Political news and government updates",
      "link": "#politics"
    },
    {
      "name": "ఆటో",
      "description": "ఆటోమొబైల్ వార్తలు మరియు సమీక్షలు",
      "link": "#auto"
    },
    {
      "name": "ఆరోగ్యం",
      "description": "ఆరోగ్య వార్తలు మరియు వైద్య సమాచారం",
      "link": "#health"
    },
    {
      "name": "క్రీడలు",
      "description": "క్రీడా వార్తలు మరియు అప్‌డేట్‌లు",
      "link": "#sports"
    },
    {
      "name": "జీవనశైలి",
      "description": "జీవనశైలి మరియు ఫ్యాషన్ వార్తలు",
      "link": "#lifestyle"
    },
    {
      "name": "దేశం",
      "description": "భారత దేశ వార్తలు మరియు రాజకీయాలు",
      "link": "#national"
    },
    {
      "name": "ప్రపంచం",
      "description": "అంతర్జాతీయ వార్తలు మరియు ప్రపంచ వ్యవహారాలు",
      "link": "#international"
    },
    {
      "name": "రాష్ట్రం",
      "description": "తెలంగాణ మరియు ఆంధ్రప్రదేశ్ వార్తలు",
      "link": "#state"
    },
    {
      "name": "రియల్ ఎస్టేట్",
      "description": "రియల్ ఎస్టేట్ మరియు ప్రాపర్టీ వార్తలు",
      "link": "#real-estate"
    },
    {
      "name": "వాతావరణం",
      "description": "వాతావరణ మరియు వాతావరణ మార్పుల వార్తలు",
      "link": "#weather"
    },
    {
      "name": "విద్య",
      "description": "విద్యా వార్తలు మరియు విద్యార్థుల సమాచారం",
      "link": "#education"
    },
    {
      "name": "వినోదం",
      "description": "వినోదం మరియు సంస్కృతి వార్తలు",
      "link": "#entertainment"
    },
    {
      "name": "వ్యాపారం",
      "description": "వ్యాపార వార్తలు మరియు మార్కెట్ అప్‌డేట్‌లు",
      "link": "#business"
    },
    {
      "name": "సినిమా",
      "description": "తెలుగు సినిమా వార్తలు మరియు వినోదం",
      "link": "#cinema"
    },
    {
      "name": "సైన్స్",
      "description": "సైన్స్ మరియు టెక్నాలజీ వార్తలు",
      "link": "#science"
    }
  ]
};

// DOM Content Loaded Event Listener
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

// Initialize the application
function initializeApp() {
  setupLogo();
  populateFeaturedNews();
  populateLatestNews();
  populateBusinessNews();
  populateCinemaNews();
  populateTrendingNews();
  populateWeatherWidget();
  populateCategoriesGrid();
  setupNavigation();
  setupClickHandlers();
  setupHoverEffects();
  setupAnimations();
  initializeLazyLoading();
}

// Setup Logo Functionality
function setupLogo() {
  const logo = document.getElementById('headerLogo');
  const title = document.querySelector('.header__title');
  
  if (logo) {
    logo.addEventListener('click', function() {
      // Add click animation
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = '';
        // Navigate to home
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    });
  }
  
  if (title) {
    title.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// Image lazy loading with fallback
function lazyLoadImage(img, src, alt) {
  img.style.opacity = '0';
  img.style.transition = 'opacity 0.3s ease';
  
  const tempImg = new Image();
  tempImg.onload = function() {
    img.src = src;
    img.alt = alt;
    img.style.opacity = '1';
  };
  
  tempImg.onerror = function() {
    // Show fallback placeholder
    img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDE1MCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxjaXJjbGUgY3g9Ijc1IiBjeT0iNTAiIHI9IjIwIiBmaWxsPSIjREREREREIi8+Cjx0ZXh0IHg9Ijc1IiB5PSI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjOTk5Ij7QodC40L3RgdGMPC90ZXh0Pgo8L3N2Zz4K';
    img.alt = 'చిత్రం లోడ్ కాలేదు';
    img.style.opacity = '1';
  };
  
  tempImg.src = src;
}

// Initialize lazy loading
function initializeLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        lazyLoadImage(img, img.dataset.src, img.dataset.alt || '');
        observer.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
}

// Populate Featured News with Images
function populateFeaturedNews() {
  const container = document.getElementById('featuredNews');
  if (!container) return;

  container.innerHTML = appData.featuredNews.map(article => `
    <article class="featured-article" data-id="${article.id}">
      <img src="${article.image}" 
           alt="${article.alt}" 
           class="featured-article__image"
           loading="lazy">
      <div class="featured-article__content">
        <span class="featured-article__category">${article.category}</span>
        <h3 class="featured-article__title">${article.title}</h3>
        <p class="featured-article__summary">${article.summary}</p>
        <div class="featured-article__meta">
          <span class="featured-article__author">${article.author}</span>
          <span class="featured-article__date">${article.date}</span>
        </div>
      </div>
    </article>
  `).join('');
}

// Populate Latest News with Images
function populateLatestNews() {
  const container = document.getElementById('latestNews');
  if (!container) return;

  container.innerHTML = appData.latestNews.map(article => `
    <article class="news-card" data-category="${article.category}">
      <img src="${article.image}" 
           alt="${article.alt}" 
           class="news-card__image"
           loading="lazy">
      <div class="news-card__content">
        <span class="news-card__category">${article.category}</span>
        <div class="news-card__date">${article.date}</div>
        <h3 class="news-card__title">${article.title}</h3>
        <p class="news-card__summary">${article.summary}</p>
        <div class="news-card__author">${article.author}</div>
      </div>
    </article>
  `).join('');
}

// Populate Business News with Images
function populateBusinessNews() {
  const container = document.getElementById('businessNews');
  if (!container) return;

  container.innerHTML = appData.businessNews.map(article => `
    <article class="news-card" data-category="${article.category}">
      <img src="${article.image}" 
           alt="${article.alt}" 
           class="news-card__image"
           loading="lazy">
      <div class="news-card__content">
        <span class="news-card__category">${article.category}</span>
        <div class="news-card__date">${article.date}</div>
        <h3 class="news-card__title">${article.title}</h3>
        <p class="news-card__summary">${article.summary}</p>
        <div class="news-card__author">${article.author}</div>
      </div>
    </article>
  `).join('');
}

// Populate Cinema News with Images
function populateCinemaNews() {
  const container = document.getElementById('cinemaNews');
  if (!container) return;

  container.innerHTML = appData.cinemaNews.map(article => `
    <article class="news-card" data-category="${article.category}">
      <img src="${article.image}" 
           alt="${article.alt}" 
           class="news-card__image"
           loading="lazy">
      <div class="news-card__content">
        <span class="news-card__category">${article.category}</span>
        <div class="news-card__date">${article.date}</div>
        <h3 class="news-card__title">${article.title}</h3>
        <p class="news-card__summary">${article.summary}</p>
        <div class="news-card__author">${article.author}</div>
      </div>
    </article>
  `).join('');
}

// Populate Trending News
function populateTrendingNews() {
  const container = document.getElementById('trendingNews');
  if (!container) return;

  container.innerHTML = appData.trendingNews.map(item => `
    <div class="trending-item" data-rank="${item.rank}">
      <div class="trending-rank">${item.rank}</div>
      <div class="trending-content">
        <h4 class="trending-title">${item.title}</h4>
        <div class="trending-meta">${item.author} • ${item.date}</div>
      </div>
    </div>
  `).join('');
}

// Populate Weather Widget
function populateWeatherWidget() {
  const container = document.getElementById('weather');
  if (!container) return;

  const weather = appData.weather;
  container.innerHTML = `
    <div class="weather__location">${weather.city}</div>
    <div class="weather__temp">${weather.temperature}</div>
    <div class="weather__condition">${weather.icon} ${weather.condition}</div>
    <div class="weather__humidity">తేమ: ${weather.humidity}</div>
  `;
}

// Populate Categories Grid
function populateCategoriesGrid() {
  const container = document.getElementById('categoriesGrid');
  if (!container) return;

  container.innerHTML = appData.categories.map(category => `
    <a href="${category.link}" class="category-card" data-category="${category.name}">
      <h3 class="category-card__title">${category.name}</h3>
      <p class="category-card__description">${category.description}</p>
    </a>
  `).join('');
}

// Setup Navigation with Enhanced Effects
function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav__link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Add click animation
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = '';
      }, 100);
      
      // Remove active class from all links
      navLinks.forEach(nav => nav.classList.remove('active'));
      
      // Add active class to clicked link
      this.classList.add('active');
      
      // Get the target section
      const target = this.getAttribute('href').substring(1);
      
      // Scroll to section or show filtered content
      scrollToSection(target);
    });
  });
}

// Setup Enhanced Click Handlers
function setupClickHandlers() {
  // News card click handlers with enhanced animations
  document.querySelectorAll('.news-card, .featured-article').forEach(card => {
    card.addEventListener('click', function() {
      // Add click effect with loading animation
      addClickAnimation(this);
      
      // Show loading cursor
      document.body.style.cursor = 'wait';
      
      setTimeout(() => {
        document.body.style.cursor = 'default';
        console.log('Article clicked:', this);
      }, 500);
    });
  });

  // Trending news click handlers
  document.querySelectorAll('.trending-item').forEach(item => {
    item.addEventListener('click', function() {
      addClickAnimation(this);
      console.log('Trending item clicked:', this);
    });
  });

  // Category card click handlers
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function(e) {
      e.preventDefault();
      addClickAnimation(this);
      
      const category = this.dataset.category;
      console.log('Category clicked:', category);
      
      filterNewsByCategory(category);
    });
  });

  // View more links with underline animation
  document.querySelectorAll('.view-more').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      addClickAnimation(this);
      console.log('View more clicked');
    });
  });

  // Update links with enhanced effects
  document.querySelectorAll('.update-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      addClickAnimation(this);
    });
  });
}

// Add click animation
function addClickAnimation(element) {
  element.style.transform = 'scale(0.98)';
  element.style.transition = 'transform 0.1s ease';
  
  setTimeout(() => {
    element.style.transform = '';
    element.style.transition = '';
  }, 100);
}

// Setup Hover Effects
function setupHoverEffects() {
  // Add hover effects to all clickable elements
  const clickableElements = document.querySelectorAll(
    '.news-card, .featured-article, .trending-item, .category-card, ' +
    '.nav__link, .view-more, .category-link, .update-item, .header__logo'
  );
  
  clickableElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
      this.style.cursor = 'pointer';
    });
    
    element.addEventListener('mouseleave', function() {
      this.style.cursor = 'default';
    });
  });
}

// Setup Animations
function setupAnimations() {
  // Fade in animation for sections
  const sections = document.querySelectorAll('.section, .widget, .news-card, .featured-article');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
      }
    });
  }, { threshold: 0.1 });
  
  sections.forEach(section => {
    observer.observe(section);
  });

  // Breaking news animation enhancement
  const breakingNewsText = document.getElementById('breakingNewsText');
  if (breakingNewsText) {
    breakingNewsText.addEventListener('animationiteration', function() {
      // Add pulse effect on each iteration
      this.style.opacity = '0.8';
      setTimeout(() => {
        this.style.opacity = '1';
      }, 100);
    });
  }
}

// Scroll to section with smooth animation
function scrollToSection(target) {
  const targetElement = document.getElementById(target) || document.querySelector(`[data-section="${target}"]`);
  
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  } else {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}

// Filter news by category with enhanced animations
function filterNewsByCategory(category) {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  
  const newsCards = document.querySelectorAll('.news-card');
  
  // Add filter animation
  newsCards.forEach((card, index) => {
    setTimeout(() => {
      if (card.dataset.category === category || category === 'home') {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
        card.style.display = 'flex';
      } else {
        card.style.opacity = '0.3';
        card.style.transform = 'translateY(10px)';
      }
    }, index * 50);
  });
  
  // Reset after animation
  setTimeout(() => {
    newsCards.forEach(card => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
      card.style.display = 'flex';
    });
  }, 3000);
}

// Enhanced smooth scrolling for all anchor links
document.addEventListener('click', function(e) {
  if (e.target.matches('a[href^="#"]')) {
    e.preventDefault();
    const target = e.target.getAttribute('href').substring(1);
    scrollToSection(target);
  }
});

// Loading animation effect with enhanced visuals
function showLoadingEffect(element) {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  element.style.transition = 'all 0.5s ease';
  
  setTimeout(() => {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
  }, 100);
}

// Initialize loading effects for dynamic content
function initializeLoadingEffects() {
  const dynamicContainers = [
    'featuredNews',
    'latestNews',
    'businessNews',
    'cinemaNews',
    'trendingNews',
    'categoriesGrid'
  ];
  
  dynamicContainers.forEach((containerId, index) => {
    const container = document.getElementById(containerId);
    if (container) {
      setTimeout(() => {
        showLoadingEffect(container);
      }, index * 200);
    }
  });
}

// Handle responsive navigation for mobile
function handleMobileNavigation() {
  const nav = document.querySelector('.header__nav');
  
  if (window.innerWidth <= 768) {
    nav.style.overflowX = 'auto';
    nav.style.whiteSpace = 'nowrap';
  } else {
    nav.style.overflowX = 'visible';
    nav.style.whiteSpace = 'normal';
  }
}

// Listen for window resize
window.addEventListener('resize', handleMobileNavigation);

// Initialize mobile navigation on load
document.addEventListener('DOMContentLoaded', handleMobileNavigation);

// Enhanced keyboard navigation support
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    // Close any overlays or reset filters
    const newsCards = document.querySelectorAll('.news-card');
    newsCards.forEach(card => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    });
  }
  
  // Enter key on focused elements
  if (e.key === 'Enter' && e.target.matches('.news-card, .trending-item, .category-card')) {
    e.target.click();
  }
  
  // Arrow key navigation for news cards
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    const focusableElements = document.querySelectorAll('.news-card, .trending-item');
    const currentIndex = Array.from(focusableElements).indexOf(document.activeElement);
    
    if (currentIndex !== -1) {
      e.preventDefault();
      const nextIndex = e.key === 'ArrowDown' 
        ? Math.min(currentIndex + 1, focusableElements.length - 1)
        : Math.max(currentIndex - 1, 0);
      
      focusableElements[nextIndex].focus();
    }
  }
});

// Enhanced focus management for accessibility
function addFocusManagement() {
  const focusableElements = document.querySelectorAll(
    'a, button, .news-card, .trending-item, .category-card, [tabindex], .header__logo'
  );
  
  focusableElements.forEach(element => {
    element.setAttribute('tabindex', '0');
    
    element.addEventListener('focus', function() {
      this.style.outline = '2px solid var(--color-primary)';
      this.style.outlineOffset = '2px';
      this.style.borderRadius = '4px';
    });
    
    element.addEventListener('blur', function() {
      this.style.outline = 'none';
    });
  });
}

// Social sharing functionality (placeholder)
function shareArticle(title, url) {
  if (navigator.share) {
    navigator.share({
      title: title,
      url: url
    });
  } else {
    // Fallback for browsers without Web Share API
    const shareText = `${title} - ${url}`;
    navigator.clipboard.writeText(shareText).then(() => {
      showNotification('లింక్ కాపీ చేయబడింది!');
    });
  }
}

// Show notification (placeholder)
function showNotification(message) {
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--color-success);
    color: white;
    padding: 12px 20px;
    border-radius: 6px;
    z-index: 1000;
    animation: fadeIn 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'fadeOut 0.3s ease';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Initialize all enhanced features
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    initializeLoadingEffects();
    addFocusManagement();
  }, 100);
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Optimized scroll handling
const handleScroll = debounce(() => {
  // Add scroll-based animations or effects here
  const scrollTop = window.pageYOffset;
  const header = document.querySelector('.header');
  
  if (scrollTop > 100) {
    header.style.boxShadow = 'var(--shadow-lg)';
  } else {
    header.style.boxShadow = 'var(--shadow-sm)';
  }
}, 10);

window.addEventListener('scroll', handleScroll);

// Export functions for potential testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initializeApp,
    populateFeaturedNews,
    populateLatestNews,
    populateBusinessNews,
    populateCinemaNews,
    populateTrendingNews,
    filterNewsByCategory,
    setupHoverEffects,
    setupAnimations,
    addClickAnimation
  };
}