'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import { Button } from '@/components/ui/button'
import { 
  Target, 
  Users, 
  TrendingUp, 
  Lightbulb, 
  FileText, 
  Download, 
  RefreshCw,
  CheckCircle,
  Zap,
  Star,
  ArrowRight,
  Calendar,
  DollarSign,
  BarChart3,
  MessageSquare,
  Eye,
  Share2,
  Heart,
  Award,
  Radio,
  Tv,
  Smartphone,
  Monitor,
  Megaphone,
  Filter,
  Settings,
  Activity
} from 'lucide-react'

export default function MarketingStrategyToolArabic() {
  const [activeTab, setActiveTab] = useState('strategy-overview')
  const [formData, setFormData] = useState({
    businessName: '',
    industry: '',
    budget: '',
    duration: '',
    targetAudience: '',
    campaignGoal: '',
    geographicTarget: ''
  })
  const [generatedStrategy, setGeneratedStrategy] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const marketingStrategySections = [
    {
      id: 'strategy-overview',
      title: 'نظرة عامة على الاستراتيجية',
      description: 'تحليل شامل للوضع الحالي والأهداف المستقبلية',
      icon: Target,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'target-audience',
      title: 'تحليل الجمهور المستهدف',
      description: 'فهم عميق للعملاء المحتملين وسلوكياتهم',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'campaign-planning',
      title: 'تخطيط الحملات',
      description: 'تصميم حملات تسويقية فعالة ومؤثرة',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'content-strategy',
      title: 'استراتيجية المحتوى',
      description: 'تخطيط المحتوى المناسب لكل قناة',
      icon: Lightbulb,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'budget-allocation',
      title: 'توزيع الميزانية',
      description: 'تخصيص الموارد المالية بشكل فعال',
      icon: DollarSign,
      color: 'from-yellow-500 to-amber-500'
    },
    {
      id: 'kpi-metrics',
      title: 'مؤشرات الأداء',
      description: 'قياس النجاح وتتبع الأداء',
      icon: BarChart3,
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  const industryOptions = [
    { value: 'technology', label: 'التكنولوجيا' },
    { value: 'healthcare', label: 'الرعاية الصحية' },
    { value: 'education', label: 'التعليم' },
    { value: 'retail', label: 'تجارة التجزئة' },
    { value: 'food-beverage', label: 'المطاعم والمشروبات' },
    { value: 'real-estate', label: 'العقارات' },
    { value: 'automotive', label: 'السيارات' },
    { value: 'fashion', label: 'الأزياء' },
    { value: 'finance', label: 'التمويل' },
    { value: 'travel-tourism', label: 'السفر والسياحة' },
    { value: 'beauty-cosmetics', label: 'التجميل والعناية' },
    { value: 'fitness-wellness', label: 'اللياقة والصحة' },
    { value: 'entertainment', label: 'الترفيه' },
    { value: 'professional-services', label: 'الخدمات المهنية' },
    { value: 'manufacturing', label: 'التصنيع' }
  ]

  const budgetOptions = [
    { value: '5000-10000', label: '5,000 - 10,000 ج.م' },
    { value: '10000-25000', label: '10,000 - 25,000 ج.م' },
    { value: '25000-50000', label: '25,000 - 50,000 ج.م' },
    { value: '50000-100000', label: '50,000 - 100,000 ج.م' },
    { value: '100000+', label: '100,000+ ج.م' }
  ]

  const durationOptions = [
    { value: '1-month', label: 'شهر واحد' },
    { value: '3-months', label: '3 أشهر' },
    { value: '6-months', label: '6 أشهر' },
    { value: '1-year', label: 'سنة واحدة' },
    { value: '2-years', label: 'سنتان' }
  ]

  const campaignGoals = [
    { value: 'brand-awareness', label: 'زيادة الوعي بالعلامة التجارية' },
    { value: 'lead-generation', label: 'توليد العملاء المحتملين' },
    { value: 'sales-conversion', label: 'زيادة المبيعات والتحويل' },
    { value: 'customer-retention', label: 'الاحتفاظ بالعملاء' },
    { value: 'market-expansion', label: 'التوسع في السوق' },
    { value: 'product-launch', label: 'إطلاق منتج جديد' }
  ]

  const geographicTargets = [
    { value: 'local', label: 'محلي (مدينة واحدة)' },
    { value: 'regional', label: 'إقليمي (عدة مدن)' },
    { value: 'national', label: 'وطني (جميع المحافظات)' },
    { value: 'gcc', label: 'مجلس التعاون الخليجي' },
    { value: 'middle-east', label: 'الشرق الأوسط' },
    { value: 'international', label: 'دولي' }
  ]

  const generateStrategyOverview = () => {
    const industryText = industryOptions.find(opt => opt.value === formData.industry)?.label || formData.industry
    const budgetText = budgetOptions.find(opt => opt.value === formData.budget)?.label || formData.budget
    const durationText = durationOptions.find(opt => opt.value === formData.duration)?.label || formData.duration

    return `📊 **نظرة عامة على استراتيجية التسويق**

### 🏢 **معلومات المشروع:**
**اسم الشركة:** ${formData.businessName}
**الصناعة:** ${industryText}
**الميزانية:** ${budgetText}
**المدة:** ${durationText}
**الجمهور المستهدف:** ${formData.targetAudience}
**الهدف الرئيسي:** ${campaignGoals.find(opt => opt.value === formData.campaignGoal)?.label || formData.campaignGoal}
**النطاق الجغرافي:** ${geographicTargets.find(opt => opt.value === formData.geographicTarget)?.label || formData.geographicTarget}

---

### 🎯 **الرؤية الاستراتيجية:**
**الرؤية:** أن نصبح الخيار الأول في ${industryText} من خلال تقديم قيمة استثنائية للعملاء.

**المهمة:** تقديم حلول تسويقية مبتكرة وفعالة تساعد ${formData.targetAudience} على تحقيق أهدافهم.

**القيم الأساسية:**
• الجودة والتميز في كل ما نقدمه
• الابتكار والتطوير المستمر
• النزاهة والشفافية في التعامل
• التركيز على العملاء وتلبية احتياجاتهم
• المسؤولية الاجتماعية تجاه المجتمع

---

### 📈 **الأهداف الاستراتيجية:**
**أهداف قصيرة المدى (3 أشهر):**
• بناء وجود قوي على منصات التواصل الاجتماعي
• توليد 50+ عميل محتمل شهرياً
• تحقيق عائد استثمار (ROI) بنسبة 200%

**أهداف متوسطة المدى (6 أشهر):**
• زيادة الوعي بالعلامة التجارية بنسبة 40%
• تحقيق نمو في المبيعات بنسبة 25%
• بناء قاعدة عملاء مخلصين

**أهداف طويلة المدى (سنة):**
• أن نصبح من بين أفضل 3 علامات تجارية في ${industryText}
• تحقيق إيرادات سنوية تتجاوز 2 مليون ج.م
• التوسع إلى أسواق جديدة

---

### 🚀 **عوامل النجاح الحاسمة:**
1. **فهم عميق للسوق المستهدف**
2. **جودة المنتجات/الخدمات المقدمة**
3. **استراتيجية تسويقية متكاملة**
4. **فريق عمل محترف وملتزم**
5. **إدارة مالية فعالة**
6. **قدرة على التكيف مع التغيرات**

---
#استراتيجية_تسويق #تخطيط #أعمال`
  }

  const generateTargetAudienceAnalysis = () => {
    return `👥 **تحليل الجمهور المستهدف**

### 🎯 **الجمهور الأساسي:**
**الفئة العمرية:** 25-45 سنة
**الجنس:** ذكور وإناث
**المستوى التعليمي:** جامعي فما فوق
**الدخل الشهري:** 5,000+ ج.م
**الموقع:** ${geographicTargets.find(opt => opt.value === formData.geographicTarget)?.label || formData.geographicTarget}

---

### 💡 **الخصائص النفسية والسلوكية:**
**الاهتمامات الرئيسية:**
• التكنولوجيا والابتكار
• التطور المهني والتعلم المستمر
• الجودة والقيمة مقابل السعر
• الراحة والسهولة في الاستخدام
• الاستدامة والمسؤولية الاجتماعية

**التحديات التي يواجهونها:**
• نقص الوقت للبحث عن حلول مثالية
• صعوبة التمييز بين الخيارات المتاحة
• القلق من اتخاذ قرارات خاطئة
• الرغبة في الحصول على أفضل قيمة ممكنة

**الدوافع الشرائية:**
• الرغبة في تحسين جودة الحياة
• البحث عن حلول فعالة وعملية
• الرغبة في التميز عن الآخرين
• الثقة في العلامات التجارية الموثوقة

---

### 📱 **القنوات المفضلة:**
**الرقمية:**
• منصات التواصل الاجتماعي (إنستجرام، فيسبوك، لينكدإن)
• محركات البحث (جوجل)
• البريد الإلكتروني التسويقي
• الإعلانات المدفوعة

**التقليدية:**
• الفعاليات والمعارض
• الإعلانات التلفزيونية والإذاعية
• الصحف والمجلات المتخصصة
• التسويق الشفهي

---

### 🎪 **شخصيات المشتري:**
**الشخصية 1: المهني الطموح**
• العمر: 30-40 سنة
• الوظيفة: مدير/مديرة في شركة
• الهدف: التميز في المجال المهني
• التحدي: نقص الوقت للبحث
• القناة المفضلة: لينكدإن والبريد الإلكتروني

**الشخصية 2: رائد الأعمال**
• العمر: 25-35 سنة
• الوظيفة: صاحب مشروع ناشئ
• الهدف: نمو الأعمال وزيادة الأرباح
• التحدي: محدودية الميزانية
• القناة المفضلة: فيسبوك وإنستجرام

**الشخصية 3: المستهلك الواعي**
• العمر: 20-30 سنة
• الوظيفة: طالب/موظف
• الهدف: الحصول على أفضل قيمة
• التحدي: مقارنة الخيارات المتعددة
• القناة المفضلة: يوتيوب وتيك توك

---
#جمهور_مستهدف #تحليل_السوق #تسويق_رقمي`
  }

  const generateCampaignPlanning = () => {
    const budgetText = budgetOptions.find(opt => opt.value === formData.budget)?.label || formData.budget
    const durationText = durationOptions.find(opt => opt.value === formData.duration)?.label || formData.duration

    return `🚀 **تخطيط الحملات التسويقية**

### 📅 **جدول الحملات الزمني:**

#### **الشهر 1: بناء الأساس**
**الأسبوع 1-2:**
• إعداد الحملات الإعلانية الأولية
• إنشاء محتوى تعريفي بالعلامة التجارية
• بناء وجود على منصات التواصل الاجتماعي

**الأسبوع 3-4:**
• إطلاق حملة الوعي بالعلامة التجارية
• بدء التسويق بالمحتوى
• جمع البيانات والتحليلات الأولية

#### **الشهر 2: التوسع والنمو**
**الأسبوع 5-6:**
• توسيع نطاق الحملات الإعلانية
• تحسين الاستهداف بناءً على البيانات
• إطلاق حملات توليد العملاء المحتملين

**الأسبوع 7-8:**
• تحسين أداء الحملات الحالية
• تجربة قنوات تسويقية جديدة
• تحليل النتائج وتعديل الاستراتيجية

#### **الشهر 3: التحسين والتوسع**
**الأسبوع 9-10:**
• تركيز على الحملات الأداء
• زيادة الميزانية للقنوات الناجحة
• تطوير استراتيجيات الاحتفاظ بالعملاء

**الأسبوع 11-12:**
• تحليل شامل لأداء الحملات
• تخطيط للمرحلة التالية
• توثيق الدروس المستفادة

---

### 💰 **توزيع الميزانية (${budgetText}):**
**التسويق الرقمي (60%):**
• إعلانات وسائل التواصل الاجتماعي: 25%
• إعلانات محركات البحث: 20%
• التسويق بالمحتوى: 10%
• البريد الإلكتروني: 5%

**التسويق التقليدي (25%):**
• الإعلانات التلفزيونية: 10%
• الإعلانات الإذاعية: 8%
• الإعلانات المطبوعة: 7%

**التطوير والتحسين (15%):**
• تحسين الموقع الإلكتروني: 8%
• أدوات التحليل والتتبع: 4%
• التدريب والتطوير: 3%

---

### 🎯 **الحملات الرئيسية:**

#### **حملة الوعي بالعلامة التجارية**
**المدة:** 4 أسابيع
**الميزانية:** 30% من الإجمالي
**الهدف:** زيادة الوعي بنسبة 40%
**القنوات:** فيسبوك، إنستجرام، يوتيوب
**المحتوى:** فيديوهات تعريفية، صور عالية الجودة

#### **حملة توليد العملاء المحتملين**
**المدة:** 6 أسابيع
**الميزانية:** 40% من الإجمالي
**الهدف:** توليد 200+ عميل محتمل
**القنوات:** جوجل، لينكدإن، البريد الإلكتروني
**المحتوى:** عروض خاصة، كتب إلكترونية، ويبنارات

#### **حملة التحويل والمبيعات**
**المدة:** 8 أسابيع
**الميزانية:** 30% من الإجمالي
**الهدف:** تحقيق 50+ عملية بيع
**القنوات:** إعلانات إعادة الاستهداف، البريد الإلكتروني
**المحتوى:** عروض محدودة، شهادات العملاء

---
#حملات_تسويقية #تخطيط #إعلانات`
  }

  const generateContentStrategy = () => {
    return `📝 **استراتيجية المحتوى**

### 🎯 **أهداف المحتوى:**
• بناء الثقة والمصداقية مع الجمهور
• تثقيف العملاء حول المنتجات/الخدمات
• زيادة التفاعل والمشاركة
• تحسين محركات البحث (SEO)
• دعم عملية اتخاذ قرار الشراء

---

### 📊 **أنواع المحتوى المقترحة:**

#### **محتوى تعليمي (40%)**
**المدونات والمقالات:**
• كيفية استخدام المنتجات بفعالية
• نصائح وحلول للمشكلات الشائعة
• اتجاهات الصناعة والتطورات
• دراسات حالة ونجاحات

**الفيديوهات التعليمية:**
• شروحات المنتجات خطوة بخطوة
• نصائح الخبراء في المجال
• ورش عمل وعروض توضيحية
• أسئلة وأجوبة شائعة

#### **محتوى ترويجي (30%)**
**محتوى العروض والتخفيضات:**
• إعلانات المنتجات والخدمات
• عروض خاصة ومحدودة
• برامج الولاء والمكافآت
• شهادات العملاء والتقييمات

**محتوى التفاعل:**
• مسابقات وهدايا
• استطلاعات الرأي
• تحديات ومسابقات
• محتوى من إنشاء المستخدمين

#### **محتوى ترفيهي (20%)**
**القصص والتجارب:**
• قصص نجاح العملاء
• خلفيات عن الشركة والفريق
• لحظات خلف الكواليس
• محتوى مضحك وترفيهي

**المحتوى المرئي:**
• إنفوجرافيك وإحصائيات
• صور عالية الجودة
• رسوم متحركة وميمات
• محتوى تفاعلي

#### **محتوى خبري (10%)**
**الأخبار الصناعية:**
• آخر التطورات في المجال
• أخبار الشركة والمنتجات الجديدة
• المشاركة في الفعاليات والمعارض
• شراكات جديدة وتعاونات

---

### 📅 **جدول نشر المحتوى:**

#### **يومياً:**
• منشورات على منصات التواصل الاجتماعي (2-3 منشورات)
• ردود على التعليقات والرسائل
• متابعة الاتجاهات والمواضيع الرائجة

#### **أسبوعياً:**
• مدونة أو مقال جديد
• فيديو تعليمي أو ترفيهي
• نشرة بريدية للمشتركين
• تحليل وتقرير الأداء

#### **شهرياً:**
• دراسة حالة مفصلة
• فيديو طويل أو ويبنار
• تقرير شامل عن أداء المحتوى
• تخطيط المحتوى للشهر القادم

#### **ربع سنوياً:**
• محتوى خاص بالمواسم والمناسبات
• حملات تسويقية كبيرة
• تحليل شامل لأداء الاستراتيجية
• تطوير وتحسين خطة المحتوى

---

### 🎨 **دليل العلامة التجارية للمحتوى:**
**الألوان:** ألوان العلامة التجارية الأساسية والثانوية
**الخطوط:** الخطوط الرسمية للشركة
**الصوت:** احترافي، ودود، وموثوق
**الأسلوب:** واضح، مباشر، وجذاب
**القيم:** الجودة، الابتكار، العملاء

---
#استراتيجية_المحتوى #تسويق_رقمي #محتوى`
  }

  const generateBudgetAllocation = () => {
    const budgetText = budgetOptions.find(opt => opt.value === formData.budget)?.label || formData.budget
    const durationText = durationOptions.find(opt => opt.value === formData.duration)?.label || formData.duration

    return `💰 **توزيع الميزانية التسويقية**

### 📊 **نظرة عامة على الميزانية:**
**الميزانية الإجمالية:** ${budgetText}
**المدة:** ${durationText}
**متوسط الإنفاق الشهري:** ${formData.budget === '5000-10000' ? '5,000 ج.م' : 
  formData.budget === '10000-25000' ? '15,000 ج.م' :
  formData.budget === '25000-50000' ? '35,000 ج.م' :
  formData.budget === '50000-100000' ? '65,000 ج.م' : '150,000+ ج.م'}

---

### 🎯 **توزيع الميزانية حسب القنوات:**

#### **التسويق الرقمي (65%)**
**إعلانات وسائل التواصل الاجتماعي (30%):**
• فيسبوك: 12%
• إنستجرام: 10%
• لينكدإن: 5%
• تيك توك: 3%
**الميزانية:** ${formData.budget === '5000-10000' ? '1,500 ج.م' : 
  formData.budget === '10000-25000' ? '4,500 ج.م' :
  formData.budget === '25000-50000' ? '10,500 ج.م' :
  formData.budget === '50000-100000' ? '19,500 ج.م' : '45,000+ ج.م'}

**إعلانات محركات البحث (20%):**
• جوجل ADS: 15%
• بينج ADS: 5%
**الميزانية:** ${formData.budget === '5000-10000' ? '1,000 ج.م' : 
  formData.budget === '10000-25000' ? '3,000 ج.م' :
  formData.budget === '25000-50000' ? '7,000 ج.م' :
  formData.budget === '50000-100000' ? '13,000 ج.م' : '30,000+ ج.م'}

**التسويق بالمحتوى (10%):**
• إنشاء المحتوى: 6%
• توزيع المحتوى: 4%
**الميزانية:** ${formData.budget === '5000-10000' ? '500 ج.م' : 
  formData.budget === '10000-25000' ? '1,500 ج.م' :
  formData.budget === '25000-50000' ? '3,500 ج.م' :
  formData.budget === '50000-100000' ? '6,500 ج.م' : '15,000+ ج.م'}

**البريد الإلكتروني التسويقي (5%):**
• أدوات البريد الإلكتروني: 3%
• تصميم القوالب: 2%
**الميزانية:** ${formData.budget === '5000-10000' ? '250 ج.م' : 
  formData.budget === '10000-25000' ? '750 ج.م' :
  formData.budget === '25000-50000' ? '1,750 ج.م' :
  formData.budget === '50000-100000' ? '3,250 ج.م' : '7,500+ ج.م'}

#### **التسويق التقليدي (25%)**
**الإعلانات التلفزيونية (12%):**
• قنوات محلية: 8%
• قنوات فضائية: 4%
**الميزانية:** ${formData.budget === '5000-10000' ? '600 ج.م' : 
  formData.budget === '10000-25000' ? '1,800 ج.م' :
  formData.budget === '25000-50000' ? '4,200 ج.م' :
  formData.budget === '50000-100000' ? '7,800 ج.م' : '18,000+ ج.م'}

**الإعلانات الإذاعية (8%):**
• محطات FM: 5%
• محطات أخبار: 3%
**الميزانية:** ${formData.budget === '5000-10000' ? '400 ج.م' : 
  formData.budget === '10000-25000' ? '1,200 ج.م' :
  formData.budget === '25000-50000' ? '2,800 ج.م' :
  formData.budget === '50000-100000' ? '5,200 ج.م' : '12,000+ ج.م'}

**الإعلانات المطبوعة (5%):**
• صحف يومية: 3%
• مجلات متخصصة: 2%
**الميزانية:** ${formData.budget === '5000-10000' ? '250 ج.م' : 
  formData.budget === '10000-25000' ? '750 ج.م' :
  formData.budget === '25000-50000' ? '1,750 ج.م' :
  formData.budget === '50000-100000' ? '3,250 ج.م' : '7,500+ ج.م'}

#### **التطوير والتحسين (10%)**
**تحسين الموقع الإلكتروني (5%):**
• تطوير وتحسين: 3%
• الصيانة والدعم: 2%
**الميزانية:** ${formData.budget === '5000-10000' ? '250 ج.م' : 
  formData.budget === '10000-25000' ? '750 ج.م' :
  formData.budget === '25000-50000' ? '1,750 ج.م' :
  formData.budget === '50000-100000' ? '3,250 ج.م' : '7,500+ ج.م'}

**أدوات التحليل والتتبع (3%):**
• برامج التحليل: 2%
• تقارير ولوحات تحكم: 1%
**الميزانية:** ${formData.budget === '5000-10000' ? '150 ج.م' : 
  formData.budget === '10000-25000' ? '450 ج.م' :
  formData.budget === '25000-50000' ? '1,050 ج.م' :
  formData.budget === '50000-100000' ? '1,950 ج.م' : '4,500+ ج.م'}

**التدريب والتطوير (2%):**
• تدريب الفريق: 1.5%
• حضور المؤتمرات: 0.5%
**الميزانية:** ${formData.budget === '5000-10000' ? '100 ج.م' : 
  formData.budget === '10000-25000' ? '300 ج.م' :
  formData.budget === '25000-50000' ? '700 ج.م' :
  formData.budget === '50000-100000' ? '1,300 ج.م' : '3,000+ ج.م'}

---

### 📈 **توقعات العائد على الاستثمار (ROI):**
**الشهر 1-3:** ROI 150-200%
**الشهر 4-6:** ROI 200-250%
**الشهر 7-12:** ROI 250-300%

### 🎯 **نقاط التحسين المستمر:**
• مراقبة أداء كل قناة أسبوعياً
• تعديل الميزانية بناءً على الأداء
• تجربة قنوات جديدة ببطء
• التركيز على القنوات الأعلى عائداً

---
#ميزانية #تسويق #إدارة_مالية`
  }

  const generateKPIMetrics = () => {
    return `📊 **مؤشرات الأداء الرئيسية (KPIs)**

### 🎯 **مؤشرات الأداء حسب الهدف:**

#### **لزيادة الوعي بالعلامة التجارية:**
**مؤشرات الوصول:**
• عدد مرات الظهور (Impressions): 500,000+ شهرياً
• مدى الوصول (Reach): 200,000+ مستخدم فريد
• معدل النمو في المتابعين: 10% شهرياً
• التغطية الإعلامية: 5+ ذكر إعلامي شهرياً

**مؤشرات التفاعل:**
• معدل التفاعل (Engagement Rate): 3-5%
• عدد الإعجابات والتعليقات والمشاركات: 10,000+ شهرياً
• معدل النقر (CTR): 2-3%
• الوقت المستغرق في الصفحة: 2+ دقيقة

---

#### **لتوليد العملاء المحتملين:**
**مؤشرات التوليد:**
• عدد العملاء المحتملين: 200+ شهرياً
• تكلفة العميل المحتمل (CPL): 50-100 ج.م
• معدل التحويل من زائر إلى عميل محتمل: 5-10%
• جودة العملاء المحتملين: 70+ درجة

**مؤشرات التأهيل:**
• معدل التأهيل (Lead Qualification Rate): 40-60%
• الوقت من التوليد إلى التأهيل: 24-48 ساعة
• معدل المشاركة في المحتوى: 30-50%
• التفاعل مع المبيعات: 20-30%

---

#### **لزيادة المبيعات والتحويل:**
**مؤشرات المبيعات:**
• عدد المبيعات: 50+ شهرياً
• متوسط قيمة الطلب (AOV): 1,000+ ج.م
• معدل التحويل (Conversion Rate): 3-5%
• الإيرادات الشهرية: 50,000+ ج.م

**مؤشرات الربحية:**
• تكلفة اكتساب العميل (CAC): 200-400 ج.م
• قيمة العميل مدى الحياة (LTV): 2,000+ ج.م
• هامش الربح: 40-60%
• العائد على الاستثمار (ROI): 200-300%

---

#### **للاحتفاظ بالعملاء:**
**مؤشرات الولاء:**
• معدل الاحتفاظ بالعملاء: 80-90%
• معدل تكرار الشراء: 2-3 مرات سنوياً
• قيمة الطلب المتكرر: 1,500+ ج.م
• معدل الإحالة: 20-30%

**مؤشرات الرضا:**
• نقاط رضا العملاء (CSAT): 4.5/5
• صافي نقاط الترويج (NPS): 50+
• معدل حل الشكاوى: 95% خلال 24 ساعة
• معدل إلغاء الاشتراكات: <5%

---

### 📱 **مؤشرات الأداء حسب القناة:**

#### **وسائل التواصل الاجتماعي:**
• عدد المتابعين: 10,000+ بحلول نهاية السنة
• معدل التفاعل: 3-5%
• نسبة النقر إلى الظهور: 2-3%
• عدد الزيارات من وسائل التواصل: 5,000+ شهرياً

#### **محركات البحث:**
• مرتبة البحث: ضمن أفضل 5 نتائج للكلمات الرئيسية
• عدد الزيارات العضوية: 3,000+ شهرياً
• تكلفة النقرة (CPC): 1-3 ج.م
• معدل التحويل من البحث: 3-5%

#### **البريد الإلكتروني:**
• معدل الفتح: 25-35%
• معدل النقر: 3-5%
• معدل إلغاء الاشتراك: <1%
• الإيرادات من البريد: 10,000+ ج.م شهرياً

#### **الموقع الإلكتروني:**
• عدد الزوار: 15,000+ شهرياً
• معدل الارتداد: 30-40%
• الوقت في الموقع: 3+ دقائق
• عدد الصفحات لكل زيارة: 3+ صفحات

---

### 📈 **جدول المتابعة وال报告:**

#### **يومياً:**
• مراجعة مؤشرات الأداء الأساسية
• متابعة الإنفاق الإعلاني
• الرد على استفسارات العملاء
• تحليل التفاعل على المحتوى

#### **أسبوعياً:**
• تقرير أداء الحملات
• تحليل منافسي السوق
• اجتماع تخطيط المحتوى
• مراجعة وتعديل الاستراتيجية

#### **شهرياً:**
• تقرير شامل للأداء
• تحليل العائد على الاستثمار
• تخطيط الميزانية للشهر القادم
• اجتماع مراجعة الاستراتيجية

#### **ربع سنوياً:**
• تقييم شامل للاستراتيجية
• تحليل السوق والمنافسة
• تخطيط الأهداف الربع سنوية
• تطوير وتحسين الخطة التسويقية

---

### 🎯 **أدوات القياس والمتابعة:**
• Google Analytics
• Facebook Insights
• Twitter Analytics
• LinkedIn Analytics
• Mailchimp Reports
• HubSpot CRM
• SEMrush
• Ahrefs
• Hotjar

---
#مؤشرات_الأداء #تحليل #تسويق_رقمي`
  }

  const generateStrategy = async () => {
    setIsGenerating(true)
    
    // Simulate AI generation with timeout
    setTimeout(() => {
      let strategy = ''
      
      switch (activeTab) {
        case 'strategy-overview':
          strategy = generateStrategyOverview()
          break
        case 'target-audience':
          strategy = generateTargetAudienceAnalysis()
          break
        case 'campaign-planning':
          strategy = generateCampaignPlanning()
          break
        case 'content-strategy':
          strategy = generateContentStrategy()
          break
        case 'budget-allocation':
          strategy = generateBudgetAllocation()
          break
        case 'kpi-metrics':
          strategy = generateKPIMetrics()
          break
        default:
          strategy = generateStrategyOverview()
      }
      
      setGeneratedStrategy(strategy)
      setIsGenerating(false)
    }, 3000)
  }

  const resetForm = () => {
    setFormData({
      businessName: '',
      industry: '',
      budget: '',
      duration: '',
      targetAudience: '',
      campaignGoal: '',
      geographicTarget: ''
    })
    setGeneratedStrategy('')
  }

  const downloadAsPDF = () => {
    const blob = new Blob([generatedStrategy], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${activeTab}-استراتيجية-تسويقية.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Navigation currentPath="/marketing-strategy-tool-ar" />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full mb-6">
              <Target className="w-4 h-4" />
              <span className="text-sm font-medium">أداة استراتيجية تسويقية</span>
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              أداة تخطيط الاستراتيجية التسويقية
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              قم بإنشاء استراتيجية تسويقية متكاملة لعملك مع تحليل متعمق وتخطيط استراتيجي احترافي
            </p>
          </motion.div>

          {/* Tools Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {marketingStrategySections.map((section, index) => (
                <motion.button
                  key={section.id}
                  onClick={() => setActiveTab(section.id)}
                  className={`p-6 rounded-2xl border transition-all duration-300 text-left ${
                    activeTab === section.id
                      ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/50 text-white'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-purple-500/30'
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${activeTab === section.id ? 'bg-purple-500/20' : 'bg-white/5'}`}>
                      <section.icon className={`w-6 h-6 ${
                        activeTab === section.id ? 'text-purple-400' : 'text-gray-400'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{section.title}</h3>
                      <p className="text-sm opacity-70">{section.description}</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-purple-400" />
                  معلومات المشروع
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      اسم الشركة/المشروع *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white placeholder-gray-400"
                      value={formData.businessName}
                      onChange={(e) => handleInputChange('businessName', e.target.value)}
                      placeholder="مثال: شركة التكنولوجيا المتقدمة"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      المجال/الصناعة *
                    </label>
                    <select
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white"
                      value={formData.industry}
                      onChange={(e) => handleInputChange('industry', e.target.value)}
                      required
                    >
                      <option value="">اختر المجال</option>
                      {industryOptions.map(option => (
                        <option key={option.value} value={option.value} className="bg-gray-900">
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      الميزانية التسويقية *
                    </label>
                    <select
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white"
                      value={formData.budget}
                      onChange={(e) => handleInputChange('budget', e.target.value)}
                      required
                    >
                      <option value="">اختر الميزانية</option>
                      {budgetOptions.map(option => (
                        <option key={option.value} value={option.value} className="bg-gray-900">
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      مدة الحملة *
                    </label>
                    <select
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white"
                      value={formData.duration}
                      onChange={(e) => handleInputChange('duration', e.target.value)}
                      required
                    >
                      <option value="">اختر المدة</option>
                      {durationOptions.map(option => (
                        <option key={option.value} value={option.value} className="bg-gray-900">
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      الجمهور المستهدف *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white placeholder-gray-400"
                      value={formData.targetAudience}
                      onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                      placeholder="مثال: الشباب من 25-35 سنة، المهنيين، رائدات الأعمال"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      الهدف الرئيسي للحملة *
                    </label>
                    <select
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white"
                      value={formData.campaignGoal}
                      onChange={(e) => handleInputChange('campaignGoal', e.target.value)}
                      required
                    >
                      <option value="">اختر الهدف</option>
                      {campaignGoals.map(option => (
                        <option key={option.value} value={option.value} className="bg-gray-900">
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      النطاق الجغرافي المستهدف *
                    </label>
                    <select
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white"
                      value={formData.geographicTarget}
                      onChange={(e) => handleInputChange('geographicTarget', e.target.value)}
                      required
                    >
                      <option value="">اختر النطاق الجغرافي</option>
                      {geographicTargets.map(option => (
                        <option key={option.value} value={option.value} className="bg-gray-900">
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      onClick={generateStrategy}
                      disabled={isGenerating || !formData.businessName}
                      className="flex-1"
                    >
                      {isGenerating ? (
                        <>
                          <RefreshCw className="w-5 h-5 animate-spin mr-2" />
                          جاري الإنشاء...
                        </>
                      ) : (
                        <>
                          <Zap className="w-5 h-5 mr-2" />
                          إنشاء الاستراتيجية
                        </>
                      )}
                    </Button>
                    <Button
                      onClick={resetForm}
                      variant="outline"
                    >
                      <RefreshCw className="w-5 h-5 mr-2" />
                      إعادة تعيين
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Output */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-purple-400" />
                  الاستراتيجية المُنشأة
                </h3>
                
                {generatedStrategy ? (
                  <div className="space-y-6">
                    <div className="bg-white/10 rounded-lg p-6 border border-white/20 max-h-96 overflow-y-auto">
                      <div className="text-white whitespace-pre-wrap leading-relaxed font-mono text-sm">
                        {generatedStrategy}
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <Button
                        onClick={downloadAsPDF}
                        variant="outline"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        تحميل
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Star className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-400 mb-2">لم يتم إنشاء أي استراتيجية بعد</p>
                    <p className="text-sm text-gray-500">املأ النموذج وانقر على "إنشاء الاستراتيجية" للبدء</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}