using System;
using System.Collections.Generic;
using System.Text;

namespace MirabelkiDomain
{
    public class Product
    {
        public Guid ID { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }
    }
}
